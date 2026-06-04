import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { recordAudit, requireAdmin } from "@/lib/admin";
import {
  generateResetToken,
  generateTempPassword,
  hashPassword,
  hashToken,
  normalizeEmail,
} from "@/lib/password";
import { appUrl, sendEmail } from "@/lib/email";

const TOKEN_TTL_MS = 1000 * 60 * 60; // 1 hour

/**
 * Admin-triggered password reset. Two modes:
 *  - "temp": set a temporary password (returned to the admin once) and force a
 *    change at next login. Good for helping a locked-out learner by phone.
 *  - "link": email the learner a normal reset link (and return it for dev).
 * The admin never learns the user's real password.
 */
export async function POST(request: Request) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  let body: { email?: string; mode?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = normalizeEmail(body.email);
  const mode = body.mode === "link" ? "link" : "temp";
  const actorEmail = session.user.email ?? null;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: "No account with that email." }, { status: 404 });
  }

  if (mode === "temp") {
    const tempPassword = generateTempPassword();
    const passwordHash = await hashPassword(tempPassword);
    await prisma.$transaction([
      prisma.user.update({
        where: { id: user.id },
        data: { passwordHash, mustChangePassword: true },
      }),
      prisma.passwordResetToken.deleteMany({ where: { userId: user.id, usedAt: null } }),
    ]);
    await recordAudit({
      actorEmail,
      action: "admin_reset_temp_password",
      targetEmail: user.email,
      detail: "Temporary password issued; user must change at next login.",
    });
    return NextResponse.json({ ok: true, mode, tempPassword });
  }

  // mode === "link"
  const rawToken = generateResetToken();
  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      tokenHash: hashToken(rawToken),
      expiresAt: new Date(Date.now() + TOKEN_TTL_MS),
    },
  });
  const link = `${appUrl()}/reset-password?token=${rawToken}`;
  const { sent } = await sendEmail({
    to: user.email,
    subject: "Reset your FFI Courses password",
    text: `An administrator started a password reset for your account.\n\nOpen this link within 1 hour to set a new password:\n${link}`,
    html: `<p>An administrator started a password reset for your account.</p><p><a href="${link}">Set a new password</a> (expires in 1 hour).</p>`,
  });
  await recordAudit({
    actorEmail,
    action: "admin_reset_link",
    targetEmail: user.email,
    detail: sent ? "Reset link emailed." : "Reset link generated (email not sent).",
  });

  return NextResponse.json({ ok: true, mode, emailed: sent, link });
}
