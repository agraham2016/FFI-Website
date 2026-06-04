import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ScrollText, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { AdminUsers } from "@/components/admin/AdminUsers";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  title: "Admin",
  description: "Manage learner accounts and reset passwords.",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login?callbackUrl=/admin");
  if (session.user.role !== "admin") redirect("/account");

  const audit = await prisma.auditLog.findMany({
    orderBy: { createdAt: "desc" },
    take: 15,
  });

  return (
    <>
      <section className="border-b border-brand-100 bg-gradient-to-b from-brand-50/70 via-white to-white">
        <Container>
          <div className="py-12 lg:py-16">
            <Badge>
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              Admin portal
            </Badge>
            <h1 className="mt-4 text-display-md font-semibold">Manage accounts</h1>
            <p className="mt-2 max-w-2xl text-ink-muted">
              Find a learner and help them get back in. &quot;Temp password&quot; gives
              you a one-time password to read to them; they&apos;ll set their own at next
              sign-in. You never see their real password.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <AdminUsers />

          <div className="mt-14">
            <div className="flex items-center gap-2 text-brand-700">
              <ScrollText className="h-5 w-5" aria-hidden />
              <h2 className="font-display text-xl font-semibold text-ink">
                Recent admin actions
              </h2>
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-brand-100">
              <table className="w-full text-left text-sm">
                <thead className="bg-brand-50/60 text-xs uppercase tracking-wide text-ink-subtle">
                  <tr>
                    <th className="px-4 py-3 font-semibold">When</th>
                    <th className="px-4 py-3 font-semibold">Admin</th>
                    <th className="px-4 py-3 font-semibold">Action</th>
                    <th className="px-4 py-3 font-semibold">Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-50">
                  {audit.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-4 py-8 text-center text-ink-muted">
                        No actions yet.
                      </td>
                    </tr>
                  ) : (
                    audit.map((row) => (
                      <tr key={row.id}>
                        <td className="px-4 py-3 text-ink-muted">
                          {row.createdAt.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-ink-muted">{row.actorEmail ?? "—"}</td>
                        <td className="px-4 py-3 text-ink">{row.action}</td>
                        <td className="px-4 py-3 text-ink-muted">{row.targetEmail ?? "—"}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
