import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight, BookOpen, KeyRound, TriangleAlert } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ChangePasswordForm } from "@/components/auth/ChangePasswordForm";
import { SignOutButton } from "@/components/auth/SignOutButton";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { courses, lessonCount } from "@/content/courses";

export const metadata: Metadata = {
  title: "My account",
  description: "Your FFI course progress and account settings.",
};

function parseLessons(json: string): string[] {
  try {
    const parsed = JSON.parse(json);
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export default async function AccountPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login?callbackUrl=/account");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { progress: true },
  });
  if (!user) redirect("/login");

  const progressBySlug = new Map(user.progress.map((p) => [p.courseSlug, parseLessons(p.completedLessons)]));

  return (
    <>
      <section className="border-b border-brand-100 bg-gradient-to-b from-brand-50/70 via-white to-white">
        <Container>
          <div className="flex flex-col gap-4 py-12 sm:flex-row sm:items-end sm:justify-between lg:py-16">
            <div>
              <Badge>My account</Badge>
              <h1 className="mt-4 text-display-md font-semibold">
                Hi{user.name ? `, ${user.name}` : ""}.
              </h1>
              <p className="mt-2 text-ink-muted">{user.email}</p>
            </div>
            <div className="flex items-center gap-3">
              {user.role === "admin" ? (
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50"
                >
                  Admin portal
                </Link>
              ) : null}
              <SignOutButton />
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          {session.user.mustChangePassword ? (
            <div className="mb-10 flex items-start gap-3 rounded-2xl border border-accent-200 bg-accent-50/60 p-5">
              <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-accent-700" aria-hidden />
              <div>
                <p className="font-semibold text-ink">Please set your own password</p>
                <p className="mt-1 text-sm text-ink-soft">
                  You&apos;re using a temporary password. Choose a new one below so only
                  you know it.
                </p>
              </div>
            </div>
          ) : null}

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Progress */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-brand-700">
                <BookOpen className="h-5 w-5" aria-hidden />
                <h2 className="font-display text-xl font-semibold text-ink">
                  Your courses
                </h2>
              </div>

              <div className="mt-5 space-y-4">
                {courses.map((course) => {
                  const total = lessonCount(course);
                  const done = (progressBySlug.get(course.slug) ?? []).filter((slug) =>
                    course.modules.some((m) => m.lessons.some((l) => l.slug === slug))
                  ).length;
                  const pct = total ? Math.round((done / total) * 100) : 0;
                  return (
                    <Link
                      key={course.slug}
                      href={`/courses/${course.slug}`}
                      className="group block rounded-2xl border border-brand-100 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-display text-base font-semibold text-ink">
                          {course.title}
                        </h3>
                        <ArrowRight className="h-4 w-4 text-brand-400 transition group-hover:translate-x-0.5 group-hover:text-brand-700" aria-hidden />
                      </div>
                      <p className="mt-1 text-sm text-ink-muted">
                        {done} of {total} lessons done
                        {done === total && total > 0 ? " · Finished!" : ""}
                      </p>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-brand-100">
                        <div className="h-full bg-brand-700 transition-all" style={{ width: `${pct}%` }} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Password */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-brand-700">
                <KeyRound className="h-5 w-5" aria-hidden />
                <h2 className="font-display text-xl font-semibold text-ink">
                  Change your password
                </h2>
              </div>
              <div className="mt-5 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft sm:p-6">
                <ChangePasswordForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
