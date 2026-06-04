import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Foundation for Independence is committed to making this website accessible to everyone.",
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <Container className="relative">
          <div className="max-w-3xl py-16 lg:py-20">
            <Badge>Accessibility</Badge>
            <h1 className="mt-5 text-display-xl font-semibold">
              Accessibility Statement
            </h1>
            <p className="mt-6 text-base text-ink-muted">Last updated: May 10, 2026</p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container size="md">
          <div className="prose-ffi max-w-none">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Our commitment
            </h2>
            <p>
              Foundation for Independence is committed to making this website usable
              and accessible to everyone — including people with disabilities, family
              members, guardians, and care teams. Accessibility isn&apos;t a feature
              for us — it&apos;s central to our mission.
            </p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink">
              What we&apos;ve done
            </h2>
            <ul>
              <li>Designed against the WCAG 2.1 AA color contrast standard</li>
              <li>Provided a visible focus indicator on all interactive elements</li>
              <li>Built keyboard-navigable menus, forms, and disclosures</li>
              <li>Included a &ldquo;Skip to main content&rdquo; link at the top of every page</li>
              <li>Used semantic HTML and proper heading hierarchy throughout</li>
              <li>Honored the operating system&apos;s reduced-motion preference</li>
              <li>Ensured form fields have clear labels, descriptions, and error messaging</li>
            </ul>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink">
              Ongoing improvement
            </h2>
            <p>
              Accessibility is never &ldquo;done.&rdquo; We continue to test, learn,
              and improve. If you encounter a barrier on this site, please let us know
              so we can fix it.
            </p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink">
              Contact us
            </h2>
            <p>
              Email{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or call{" "}
              <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a> with
              questions, feedback, or requests for an accessible alternative.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
