import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import {
  generateResetToken,
  hashToken,
  normalizeEmail,
} from "@/lib/password";
import { appUrl, sendEmail } from "@/lib/email";

const TOKEN_TTL_MS = 1000 * 60 * 60; // 1 hour

export async function POST(request: Request) {
  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = normalizeEmail(body.email);

  // Always respond the same way so we never reveal whether an email is registered.
  const genericOk = NextResponse.json({ ok: true });

  if (!email || !email.includes("@")) return genericOk;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return genericOk;

  const rawToken = generateResetToken();
  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      tokenHash: hashToken(rawToken),
      expiresAt: new Date(Date.now() + TOKEN_TTL_MS),
    },
  });

  const link = `${appUrl()}/reset-password?token=${rawToken}`;
  await sendEmail({
    to: email,
    subject: "Reset your FFI Courses password",
    text: `We got a request to reset your password.\n\nOpen this link to set a new password (it expires in 1 hour):\n${link}\n\nIf you didn't ask for this, you can ignore this email.`,
    html: `<p>We got a request to reset your password.</p><p><a href="${link}">Click here to set a new password</a>. This link expires in 1 hour.</p><p>If you didn't ask for this, you can ignore this email.</p>`,
  });

  return genericOk;
}
