import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/sections/CTA";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody, CardEyebrow, CardTitle } from "@/components/ui/Card";
import { getService } from "@/content/services";

const service = getService("supported-living");

export const metadata: Metadata = {
  title: `${service.name} (${service.acronym ?? ""})`.trim(),
  description: service.intro,
};

export default function SupportedLivingPage() {
  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
        <Container className="relative">
          <div className="max-w-3xl py-20 lg:py-24">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Service</Badge>
              {service.acronym ? (
                <span className="rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">
                  {service.acronym}
                </span>
              ) : null}
            </div>
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

      {/* Features */}
      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">What we support</span>
              <h2 className="mt-3 text-display-md font-semibold">
                Skills that build sustainable independence.
              </h2>
              <p className="mt-4 text-base text-ink-muted">
                HASL services are delivered through hands-on assistance, prompting,
                modeling, and reinforcement in real-world settings — with the goal of
                increasing independence and reducing reliance on supports over time.
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
      <section className="section bg-surface-alt">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">Outcomes</span>
              <h2 className="mt-3 text-display-md font-semibold">
                What progress can look like.
              </h2>
              <p className="mt-4 text-base text-ink-muted">
                Progress is measured against each member&apos;s personalized goals.
                Over time, supports gradually fade as members gain confidence and
                routine.
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
              href="/services/employment"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Looking for Employment Services? <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <CTA
        title="See if Supported Living is the right fit."
        description="We'll help you understand the service, how it pairs with the Individual Support Plan, and what next steps look like."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "Read FAQs", href: "/faq" }}
      />
    </>
  );
}
