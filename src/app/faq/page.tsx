import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/sections/CTA";
import { Badge } from "@/components/ui/Badge";
import { faqCategories } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Foundation for Independence — services, eligibility, working with us, and more.",
};

export default function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
        <Container className="relative">
          <div className="max-w-3xl py-20 lg:py-24">
            <Badge>FAQ</Badge>
            <h1 className="mt-5 text-display-xl font-semibold">
              Answers to common questions.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Don&apos;t see what you&apos;re looking for? Reach out — we&apos;re happy
              to talk through your situation directly.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container size="md">
          {faqCategories.map((category) => (
            <div key={category.title} className="mb-16 last:mb-0">
              <h2 className="font-display text-2xl font-semibold text-ink">
                {category.title}
              </h2>
              <div className="mt-6 divide-y divide-brand-100 overflow-hidden rounded-2xl border border-brand-100 bg-white">
                {category.items.map((item) => (
                  <details
                    key={item.question}
                    className="group p-6 transition open:bg-surface-alt/40 sm:p-7"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-ink marker:hidden">
                      {item.question}
                      <span
                        aria-hidden
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 1v12M1 7h12"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-ink-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <CTA
        title="Still have questions?"
        description="We're happy to talk through your situation, the Individual Support Plan, or how to get started."
        primary={{ label: "Contact our team", href: "/contact" }}
      />
    </>
  );
}
