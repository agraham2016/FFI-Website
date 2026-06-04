import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/sections/CTA";
import { Badge } from "@/components/ui/Badge";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "DDD-authorized Supported Living (HASL) and a continuum of Employment Services — STEP, ISE, and GSE — delivered with consistency and respect across Arizona.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
        <Container className="relative">
          <div className="max-w-3xl py-20 lg:py-24">
            <Badge>Services</Badge>
            <h1 className="mt-5 text-display-xl font-semibold">
              DDD-authorized Supported Living and Employment Services.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Every service we deliver is individualized, person-centered, and aligned
              with each member&apos;s Individual Support Plan (ISP). Supports gradually
              fade as members gain confidence and independence — building a sustainable
              path to adult life.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.slug}
                  className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-8 shadow-soft sm:p-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-brand-50 p-2.5 text-brand-700">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    {service.acronym ? (
                      <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                        {service.acronym}
                      </span>
                    ) : null}
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                    {service.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-brand-700">
                    {service.tagline}
                  </p>
                  <p className="mt-5 leading-relaxed text-ink-muted">{service.intro}</p>

                  {service.programs ? (
                    <ul className="mt-6 space-y-3">
                      {service.programs.map((program) => (
                        <li
                          key={program.acronym}
                          className="rounded-2xl border border-brand-100 bg-surface-alt/50 p-4"
                        >
                          <div className="flex items-center gap-2">
                            <span className="rounded-md bg-brand-700 px-2 py-0.5 text-xs font-semibold text-white">
                              {program.acronym}
                            </span>
                            <span className="font-display text-sm font-semibold text-ink">
                              {program.name}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-ink-muted">{program.summary}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {service.features.slice(0, 6).map((feature) => (
                        <li
                          key={feature.title}
                          className="flex items-start gap-2 text-sm text-ink-soft"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                          {feature.title}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    Learn more about {service.shortName}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <CTA
        title="Not sure which service is the right fit?"
        description="We're happy to talk through goals, the Individual Support Plan, and how FFI can fit into the broader care plan. There's no pressure — just a conversation."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "Read FAQs", href: "/faq" }}
      />
    </>
  );
}
