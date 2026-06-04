import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { normalizeEmail } from "@/lib/password";

export async function GET(request: Request) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  const q = normalizeEmail(new URL(request.url).searchParams.get("q") ?? "");

  const users = await prisma.user.findMany({
    where: q ? { email: { contains: q } } : undefined,
    orderBy: { createdAt: "desc" },
    take: 200,
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      mustChangePassword: true,
      createdAt: true,
      _count: { select: { progress: true } },
    },
  });

  return NextResponse.json({ users });
}
