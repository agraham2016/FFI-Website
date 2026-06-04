import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Foundation for Independence handles your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <Container className="relative">
          <div className="max-w-3xl py-16 lg:py-20">
            <Badge>Privacy</Badge>
            <h1 className="mt-5 text-display-xl font-semibold">Privacy Statement</h1>
            <p className="mt-6 text-base text-ink-muted">
              Last updated: May 10, 2026
            </p>
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
              Foundation for Independence (FFI) respects your privacy. This page
              describes how we handle information collected through this website. It is
              not a substitute for the formal notices and consents that govern services
              delivered to members and families, which are provided separately during
              intake and service planning.
            </p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink">
              Information we collect on this site
            </h2>
            <p>
              When you submit a contact form or join our mailing list, we collect the
              information you provide — typically your name, email address, optional
              phone number, your relationship to the individual (e.g., self, family,
              guardian, care team), and the content of your message.
            </p>
            <p>
              We use this information solely to respond to your inquiry, to follow up
              on services you&apos;ve asked about, or to send the periodic updates you
              opted into. We do not sell, rent, or share your information with third
              parties for marketing purposes.
            </p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink">
              Protected health information
            </h2>
            <p>
              Please do not include diagnostic information, medication details, or any
              other protected health information in this website&apos;s contact form.
              For sensitive matters, we&apos;ll connect you with an appropriate channel
              after our initial conversation.
            </p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink">
              Cookies & analytics
            </h2>
            <p>
              This site uses minimal, privacy-respecting analytics where appropriate to
              understand how visitors find and use the site. We do not use third-party
              advertising trackers.
            </p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink">
              Your choices
            </h2>
            <p>
              You can unsubscribe from our mailing list at any time using the link in
              any email we send. You can also request that we delete the information
              you submitted by emailing{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
            </p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink">
              Contact
            </h2>
            <p>
              For questions about this statement, contact us at{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
