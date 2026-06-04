import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/sections/CTA";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Foundation for Independence delivers Supported Living and Employment Services across Pinal, Maricopa, Navajo, and Apache Counties in Arizona.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
        <Container className="relative">
          <div className="max-w-3xl py-20 lg:py-24">
            <Badge>Service Areas</Badge>
            <h1 className="mt-5 text-display-xl font-semibold">
              Serving communities across Arizona.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Foundation for Independence delivers Supported Living and Employment
              Services across Pinal, Maricopa, Navajo, and Apache Counties — with a
              focus on rural and underserved regions.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {site.serviceAreas.map((area) => (
              <article
                key={area.county}
                className="rounded-3xl border border-brand-100 bg-white p-8 shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-brand-100 p-3 text-brand-700">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-ink">
                      {area.county}
                    </h2>
                    <p className="mt-1 text-sm font-medium uppercase tracking-wider text-brand-700">
                      Now serving
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                    Cities & areas served
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {area.cities.map((city) => (
                      <li
                        key={city}
                        className="rounded-full border border-brand-100 bg-surface-alt/50 px-3 py-1 text-sm text-ink-soft"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-brand-100 bg-surface-alt/60 p-8 sm:p-12">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Don&apos;t see your area?
            </h2>
            <p className="prose-ffi mt-3 max-w-2xl">
              If you&apos;re a family, a guardian, or a DDD Support Coordinator with a
              need in a nearby region, please reach out — we&apos;d like to hear from
              you.
            </p>
          </div>
        </Container>
      </section>

      <CTA
        title="Looking for services in a specific community?"
        description="Tell us where you are and what you're looking for — we'll let you know what's possible."
        primary={{ label: "Contact our team", href: "/contact" }}
      />
    </>
  );
}
