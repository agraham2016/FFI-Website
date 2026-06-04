import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/sections/CTA";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody, CardEyebrow, CardTitle } from "@/components/ui/Card";
import { getService } from "@/content/services";

const service = getService("employment");

export const metadata: Metadata = {
  title: service.name,
  description: service.intro,
};

export default function EmploymentPage() {
  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
        <Container className="relative">
          <div className="max-w-3xl py-20 lg:py-24">
            <Badge>Service</Badge>
            <div className="mt-6 flex items-start gap-4">
              <div className="rounded-2xl bg-brand-100 p-3 text-brand-700">
                <Icon className="h-7 w-7" aria-hidden />
              </div>
              <h1 className="text-display-xl font-semibold">{service.name}</h1>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              {service.intro}
            </p>
          </div>
        </Container>
      </section>

      {/* Programs */}
      <section className="section">
        <Container>
          <div className="max-w-2xl">
            <span className="eyebrow">A continuum of supports</span>
            <h2 className="mt-3 text-display-md font-semibold">
              From early exploration to community-based employment.
            </h2>
            <p className="mt-4 text-base text-ink-muted">
              Members may receive STEP, ISE, or GSE services based on assessment,
              authorization, and individual readiness. Supports are individualized and
              aligned with each member&apos;s ISP.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {service.programs?.map((program, idx) => (
              <article
                key={program.acronym}
                className="relative flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-7 shadow-soft"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-brand-700 px-2.5 py-1 text-xs font-bold tracking-wider text-white">
                    {program.acronym}
                  </span>
                  <span className="text-xs font-medium text-ink-subtle">
                    Step {idx + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {program.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {program.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {program.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm text-ink-soft"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="section bg-surface-alt">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">How we support employment</span>
              <h2 className="mt-3 text-display-md font-semibold">
                Real workplaces. Real skills. Real growth.
              </h2>
              <p className="mt-4 text-base text-ink-muted">
                Aligned with Arizona&apos;s Employment First initiative, our employment
                supports prioritize meaningful, integrated, community-based work — and
                gradually fade as members gain stability.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
              {service.features.map((feature) => {
                const FIcon = feature.icon;
                return (
                  <Card key={feature.title} className="flex h-full flex-col">
                    <CardEyebrow>
                      <FIcon className="h-5 w-5" aria-hidden />
                    </CardEyebrow>
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                    <CardBody>{feature.description}</CardBody>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Outcomes */}
      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">Outcomes</span>
              <h2 className="mt-3 text-display-md font-semibold">
                Progress that lasts beyond a first job.
              </h2>
              <p className="mt-4 text-base text-ink-muted">
                Employment supports are designed to result in long-term workplace
                success — not just placement. Progress is tracked against each
                member&apos;s personalized employment goals.
              </p>
            </div>
            <ul className="grid gap-3 lg:col-span-7">
              {service.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-700"
                    aria-hidden
                  />
                  <span className="font-display text-base font-medium text-ink">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <Link
              href="/services/supported-living"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Looking for Supported Living (HASL)? <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to explore employment supports?"
        description="We'll help you understand which Employment Service fits — STEP, ISE, or GSE — and what readiness looks like."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "Read FAQs", href: "/faq" }}
      />
    </>
  );
}
