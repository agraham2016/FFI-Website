import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/forms/ContactForm";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Foundation for Independence. We're happy to talk through your situation, services, or how to get started.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
        <Container className="relative">
          <div className="max-w-3xl py-20 lg:py-24">
            <Badge>Contact</Badge>
            <h1 className="mt-5 text-display-xl font-semibold">
              Let&apos;s start a conversation.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Whether you&apos;re an individual, a family member, a guardian, or a DDD
              Support Coordinator — we&apos;re here to help you understand if Foundation
              for Independence is the right fit. There&apos;s no pressure. Just a
              conversation.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-semibold text-ink">
                How to reach us
              </h2>
              <p className="mt-3 text-base text-ink-muted">
                We typically reply within one business day. For urgent matters, please
                call us directly.
              </p>

              <ul className="mt-8 space-y-5">
                <ContactRow
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="break-all text-brand-700 hover:text-brand-800"
                    >
                      {site.contact.email}
                    </a>
                  }
                />
                <ContactRow
                  icon={<Phone className="h-5 w-5" />}
                  label="Phone"
                  value={
                    <a
                      href={`tel:${site.contact.phoneHref}`}
                      className="text-brand-700 hover:text-brand-800"
                    >
                      {site.contact.phone}
                    </a>
                  }
                />
                <ContactRow
                  icon={<MapPin className="h-5 w-5" />}
                  label="Address"
                  value={
                    <span>
                      {site.contact.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  }
                />
                <ContactRow
                  icon={<Clock className="h-5 w-5" />}
                  label="Response time"
                  value={<span>Within one business day</span>}
                />
              </ul>

              <div className="mt-12 rounded-2xl border border-brand-100 bg-surface-alt/60 p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  Stay in the loop
                </h3>
                <p className="mt-2 text-sm text-ink-muted">
                  Occasional updates as services and community supports expand.
                </p>
                <div className="mt-4">
                  <NewsletterForm compact />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-soft sm:p-10">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Fill out the form below and we&apos;ll be in touch.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="rounded-xl bg-brand-50 p-2.5 text-brand-700">{icon}</div>
      <div className="text-sm">
        <div className="font-medium text-ink-subtle">{label}</div>
        <div className="mt-0.5 font-display text-base text-ink">{value}</div>
      </div>
    </li>
  );
}
