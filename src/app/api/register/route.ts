import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { hashPassword, normalizeEmail, validatePassword } from "@/lib/password";

export async function POST(request: Request) {
  let body: { email?: string; password?: string; name?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = normalizeEmail(body.email);
  const name = typeof body.name === "string" ? body.name.trim().slice(0, 120) : null;

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  const pwProblem = validatePassword(body.password);
  if (pwProblem) {
    return NextResponse.json({ error: pwProblem }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    // Don't reveal too much, but a clear message is friendlier here.
    return NextResponse.json(
      { error: "An account with that email already exists." },
      { status: 409 }
    );
  }

  const passwordHash = await hashPassword(body.password as string);
  await prisma.user.create({
    data: { email, name: name || null, passwordHash, role: "user" },
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}
