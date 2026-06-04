import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { getTool } from "@/content/tools";
import { site } from "@/lib/site";
import { LookupClient } from "./LookupClient";

const tool = getTool("service-area-lookup")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function ServiceAreaLookupPage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <LookupClient />
            </div>
            <aside className="lg:col-span-2">
              <div className="rounded-2xl border border-brand-100 bg-surface-alt p-6">
                <h2 className="font-display text-lg font-semibold text-ink">
                  Currently serving
                </h2>
                <ul className="mt-4 space-y-4 text-sm">
                  {site.serviceAreas.map((area) => (
                    <li key={area.county}>
                      <div className="font-semibold text-ink">{area.county}</div>
                      <div className="mt-1 text-ink-muted">
                        {area.cities.join(" • ")}
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-ink-subtle">
                  Just outside our current footprint? Still{" "}
                  <Link
                    href="/contact"
                    className="text-brand-700 underline underline-offset-2"
                  >
                    reach out
                  </Link>
                  . We’re growing and we’ll be honest about what we can offer.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Inside our area?"
        title="Let's talk about what supports might fit."
        description="A quick conversation tells us a lot — what your young adult is working toward, what's already in place, and how FFI's services could help."
        primary={{ label: "Start the conversation", href: "/contact" }}
        secondary={{ label: "See our services", href: "/services" }}
      />
    </>
  );
}
