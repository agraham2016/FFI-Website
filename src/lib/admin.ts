import { auth } from "@/auth";
import { prisma } from "@/lib/db";

/** Returns the admin session, or null if the caller is not an admin. */
export async function requireAdmin() {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "admin") return null;
  return session;
}

export async function recordAudit(params: {
  actorEmail?: string | null;
  action: string;
  targetEmail?: string | null;
  detail?: string | null;
}) {
  await prisma.auditLog.create({
    data: {
      actorEmail: params.actorEmail ?? null,
      action: params.action,
      targetEmail: params.targetEmail ?? null,
      detail: params.detail ?? null,
    },
  });
}
