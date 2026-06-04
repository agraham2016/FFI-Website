import type { Metadata } from "next";
import {
  Heart,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/sections/CTA";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardEyebrow, CardTitle } from "@/components/ui/Card";
import { CareersForm } from "@/components/forms/CareersForm";
import { roles, qualities, benefits } from "@/content/roles";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Foundation for Independence is hiring Direct Support Professionals, Employment Specialists, Supervisors, and Coordinators across Pinal, Maricopa, Navajo, and Apache Counties. Paid training, mileage, and real growth pathways.",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-accent-100/60 blur-3xl"
        />
        <Container className="relative">
          <div className="grid gap-12 py-20 lg:grid-cols-12 lg:items-center lg:py-24">
            <div className="lg:col-span-7">
              <Badge>Join our team</Badge>
              <h1 className="mt-5 text-display-xl font-semibold">
                Do meaningful work. Build a real career.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                Foundation for Independence is hiring across Arizona — Direct Support
                Professionals, Employment Specialists, Supervisors, and Coordinators.
                We&apos;re growing carefully, and we&apos;re looking for steady,
                values-aligned people who want to do work that actually changes
                lives.
              </p>

              <div
                role="note"
                className="mt-6 flex max-w-xl items-start gap-3 rounded-2xl border border-accent-200 bg-accent-50/60 p-4"
              >
                <div
                  aria-hidden
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-100 text-accent-700"
                >
                  <Heart className="h-3.5 w-3.5" />
                </div>
                <p className="text-sm leading-relaxed text-ink-soft">
                  <strong className="font-semibold text-ink">
                    Minimum requirement:
                  </strong>{" "}
                  Two years of experience supporting a person with a disability —
                  at home, at school, as a sibling, as a volunteer, or
                  professionally. All count.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#apply" size="lg">
                  Express interest
                  <ArrowDown className="h-4 w-4" aria-hidden />
                </Button>
                <Button href="#roles" variant="outline" size="lg">
                  See open roles
                </Button>
              </div>

              <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-brand-100 pt-6">
                <div>
                  <dt className="font-display text-base font-semibold text-brand-800">
                    Paid training
                  </dt>
                  <dd className="mt-1 text-xs text-ink-muted">
                    Article 9, CPR/First Aid, person-centered
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-base font-semibold text-brand-800">
                    Real growth
                  </dt>
                  <dd className="mt-1 text-xs text-ink-muted">
                    DSP → Supervisor pathway
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-base font-semibold text-brand-800">
                    Statewide
                  </dt>
                  <dd className="mt-1 text-xs text-ink-muted">
                    Pinal · Maricopa · Navajo · Apache
                  </dd>
                </div>
              </dl>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-3xl border border-brand-100 bg-white/95 p-8 shadow-lift backdrop-blur">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-3xl bg-accent-200/70 blur-xl" />
                <div className="relative">
                  <div className="rounded-xl bg-brand-50 p-2.5 text-brand-700 inline-flex">
                    <Heart className="h-5 w-5" aria-hidden />
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold text-ink">
                    Why this work?
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">
                    Independence isn&apos;t built in dramatic moments. It&apos;s
                    built in the ordinary ones — a meal cooked, a bus ride made, a
                    shift at work completed.
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">
                    The people who do this work well don&apos;t need to be saviors.
                    They need to be <strong>steady</strong>,{" "}
                    <strong>patient</strong>, and{" "}
                    <strong>consistently present</strong>. If that&apos;s you —
                    we&apos;d like to hear from you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why FFI */}
      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="eyebrow">Why FFI</span>
              <h2 className="mt-3 text-display-md font-semibold">
                A small, intentional team. The kind of place where what you do
                actually matters.
              </h2>
            </div>
            <div className="prose-ffi lg:col-span-7">
              <p>
                We&apos;re an early-stage Arizona provider focused on transition-age
                young adults with developmental disabilities — a population that&apos;s
                often underserved in the years right after high school.
              </p>
              <p>
                That means the work is real. The relationships are real. And the
                people you serve will be the same people, week after week. You&apos;ll
                see the progress, you&apos;ll feel the weight, and you&apos;ll be part
                of a team that takes this work seriously.
              </p>
              <p>
                We&apos;re building this slowly and deliberately, and we&apos;re
                hiring the same way.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Roles */}
      <section id="roles" className="section bg-surface-alt scroll-mt-24">
        <Container>
          <SectionHeading
            eyebrow="Open roles"
            title="Roles we're growing into."
            description="We hire intentionally, not all at once. If a role here matches who you are, please reach out — even if we're not actively posting it."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <article
                  key={role.slug}
                  className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-soft transition hover:shadow-card sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-brand-100 p-3 text-brand-700">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {role.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-ink-muted">
                    {role.summary}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                      Day-to-day
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {role.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-sm text-ink-soft"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 rounded-2xl bg-brand-50/60 p-4">
                    <p className="text-sm text-ink-soft">
                      <strong className="font-semibold text-ink">Best fit for: </strong>
                      {role.fitFor}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What we look for */}
      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">What we look for</span>
              <h2 className="mt-3 text-display-md font-semibold">
                Six things we care about more than anything on a resume.
              </h2>
              <p className="mt-4 text-base text-ink-muted">
                Skills can be taught. Certifications can be earned. These are the
                qualities we hire for.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
              {qualities.map((q, i) => (
                <div
                  key={q.title}
                  className="flex h-full gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft"
                >
                  <div className="font-display text-2xl font-semibold text-brand-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {q.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {q.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What we offer */}
      <section className="section bg-surface-alt">
        <Container>
          <SectionHeading
            eyebrow="What we offer"
            title="Real support, real growth."
            description="We can't out-spend the largest agencies. We can build something steadier — supportive supervision, paid training, and a path that actually goes somewhere."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <Card key={b.title} className="flex h-full flex-col">
                <CardEyebrow>
                  <CheckCircle2 className="h-5 w-5" aria-hidden />
                </CardEyebrow>
                <CardTitle className="text-lg">{b.title}</CardTitle>
                <CardBody>{b.body}</CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-14 grid gap-6 rounded-3xl border border-brand-100 bg-white p-8 shadow-soft sm:grid-cols-3 sm:p-10">
            <Highlight
              icon={<GraduationCap className="h-5 w-5" />}
              title="2+ years of real experience required"
              body="At home, at school, as a sibling, as a volunteer, or professionally — all count. We provide the certifications on top."
            />
            <Highlight
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Compliance-first culture"
              body="Aligned with DDD, AHCCCS, and HCBS standards — without the bureaucracy mindset."
            />
            <Highlight
              icon={<Sparkles className="h-5 w-5" />}
              title="Internships welcome"
              body="If you're a student in human services, social work, or psychology — we'd love to talk."
            />
          </div>
        </Container>
      </section>

      {/* Apply form */}
      <section id="apply" className="section scroll-mt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">Express interest</span>
              <h2 className="mt-3 text-display-md font-semibold">
                Tell us a little about yourself.
              </h2>
              <p className="prose-ffi mt-5">
                Whether we&apos;re actively posting your role or not, we read every
                note. If there&apos;s a fit — now or soon — we&apos;ll reach out to
                set up a conversation.
              </p>
              <div className="mt-8 rounded-2xl bg-brand-50/60 p-5">
                <p className="text-sm text-ink-soft">
                  <strong className="font-semibold text-ink">A note on resumes:</strong>{" "}
                  You&apos;re welcome to share a link below, but it&apos;s optional.
                  We typically ask for a resume after our first conversation.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-soft sm:p-10">
                <CareersForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Not sure yet?"
        title="Have a question first?"
        description="If you'd rather have a conversation before submitting anything, just reach out. We're happy to talk through what the work actually looks like."
        primary={{ label: "Contact our team", href: "/contact" }}
      />
    </>
  );
}

function Highlight({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-xl bg-brand-50 p-2 text-brand-700">{icon}</div>
      <div>
        <div className="font-display text-base font-semibold text-ink">{title}</div>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">{body}</p>
      </div>
    </div>
  );
}
