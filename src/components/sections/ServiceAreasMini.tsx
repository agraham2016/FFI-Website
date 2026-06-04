import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/lib/site";

export function ServiceAreasMini() {
  return (
    <section className="section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Where we serve"
            title="Serving communities across Arizona."
            description="Supported Living and Employment Services across Pinal, Maricopa, Navajo, and Apache Counties — with a focus on rural and underserved regions."
          />
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            View service areas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.serviceAreas.map((area) => (
            <li
              key={area.county}
              className="rounded-2xl border border-brand-100 bg-white p-5 shadow-soft transition hover:shadow-card"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-brand-50 p-2 text-brand-700">
                  <MapPin className="h-4 w-4" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {area.county}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">
                    {area.cities.slice(0, 3).join(" · ")}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
