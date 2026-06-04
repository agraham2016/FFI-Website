import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { hashPassword, validatePassword, verifyPassword } from "@/lib/password";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: { currentPassword?: string; newPassword?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const pwProblem = validatePassword(body.newPassword);
  if (pwProblem) {
    return NextResponse.json({ error: pwProblem }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!user) {
    return NextResponse.json({ error: "Account not found." }, { status: 404 });
  }

  const currentOk = await verifyPassword(
    String(body.currentPassword ?? ""),
    user.passwordHash
  );
  if (!currentOk) {
    return NextResponse.json(
      { error: "Your current password is incorrect." },
      { status: 400 }
    );
  }

  const passwordHash = await hashPassword(body.newPassword as string);
  await prisma.user.update({
    where: { id: user.id },
    data: { passwordHash, mustChangePassword: false },
  });

  return NextResponse.json({ ok: true });
}
