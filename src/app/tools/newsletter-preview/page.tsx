import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { getTool } from "@/content/tools";
import { ArrowRight, BookOpen, Calendar, Megaphone, MessageCircleQuestion, Sparkles } from "lucide-react";

const tool = getTool("newsletter-preview")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function NewsletterPreviewPage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-brand-100 bg-white shadow-card overflow-hidden">
              {/* Newsletter masthead */}
              <header className="border-b border-brand-100 bg-gradient-to-r from-brand-700 to-brand-800 px-6 py-6 text-white sm:px-10 sm:py-8">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-brand-100">
                  <span>Sample issue · Issue #07</span>
                  <span>Spring · 8-minute read</span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                  Independence isn’t a finish line.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-50/90 sm:text-base">
                  A monthly note from Foundation for Independence — guides for
                  families, parent stories, the latest on Arizona DDD, and an
                  Ask Alex Q&A.
                </p>
              </header>

              <div className="space-y-10 px-6 py-10 sm:px-10 sm:py-12">
                <Block
                  icon={Sparkles}
                  eyebrow="From Alex"
                  title="On the days when progress is invisible"
                >
                  <p>
                    We had a long week. A young man we support took six tries to
                    swipe his bus card without help. Last Friday, he did it on
                    the first try and didn’t even look up at his coach. That’s
                    independence — and that’s why we don’t measure it in big
                    moments.
                  </p>
                </Block>

                <Block
                  icon={BookOpen}
                  eyebrow="Featured guide"
                  title="Building Daily Routines that Actually Stick"
                >
                  <p>
                    Routines are how independence becomes ordinary. This month’s
                    guide walks through a five-step framework families can use
                    to build a morning, afternoon, or evening routine — without
                    rigidity, and with room for real life.
                  </p>
                  <Link
                    href="/resources/building-daily-routines"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:gap-2"
                  >
                    Read the guide
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Block>

                <Block
                  icon={MessageCircleQuestion}
                  eyebrow="Ask Alex"
                  title="“Should we apply for guardianship before our daughter turns 18?”"
                >
                  <p>
                    Short answer: not automatically. Guardianship is one of
                    several legal options, and it’s the most restrictive. This
                    month I walk through three alternatives families often don’t
                    hear about — Supported Decision-Making, limited Power of
                    Attorney, and a representative payee — and questions to ask
                    a disability-rights attorney.
                  </p>
                </Block>

                <Block
                  icon={Megaphone}
                  eyebrow="Programs & policy"
                  title="What we’re watching this month"
                >
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed">
                    <li>
                      • Updated DDD provider rates — what changed and what it
                      means for families.
                    </li>
                    <li>
                      • A reminder that ISP renewals can be requested earlier
                      than your annual date if life has changed.
                    </li>
                    <li>
                      • New transition resources from Raising Special Kids and
                      ADE.
                    </li>
                  </ul>
                </Block>

                <Block
                  icon={Calendar}
                  eyebrow="Coming up"
                  title="Local events & FFI office hours"
                >
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed">
                    <li>
                      • <strong>FFI Family Office Hours</strong> — second
                      Thursday of the month, 6pm.
                    </li>
                    <li>
                      • <strong>Self-advocacy meetup</strong> — community room,
                      East Mesa.
                    </li>
                    <li>
                      • <strong>DDD Region IV town hall</strong> — see DDD’s
                      site for date and dial-in.
                    </li>
                  </ul>
                </Block>

                <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/40 p-5 text-xs text-ink-subtle">
                  This is a representative sample. Real issues vary in length
                  and topic, never include sales pitches, and are written by a
                  real person on the FFI team.
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:p-8">
              <div className="grid items-start gap-8 lg:grid-cols-2">
                <div>
                  <span className="eyebrow">Subscribe</span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                    Like what you read?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    One short newsletter a month. No spam, easy to unsubscribe,
                    and you can write back to the human who sent it. We never
                    share your email.
                  </p>
                </div>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Have a question?"
        title="Submit a question for a future Ask Alex column."
        description="If you've ever wondered something about DDD, ISPs, services, transition, or adult life — chances are another family has too."
        primary={{ label: "Send your question", href: "/contact" }}
        secondary={{ label: "Read past guides", href: "/resources" }}
      />
    </>
  );
}

function Block({
  icon: Icon,
  eyebrow,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-3">
        <div className="inline-flex items-center justify-center rounded-xl bg-brand-50 p-2 text-brand-700">
          <Icon className="h-4 w-4" aria-hidden />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
          {eyebrow}
        </span>
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold text-ink">
        {title}
      </h3>
      <div className="mt-3 text-sm leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  );
}
