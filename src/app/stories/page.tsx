import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/sections/CTA";
import { Badge } from "@/components/ui/Badge";
import { stories } from "@/content/stories";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Stories of progress and independence from the families and individuals served by Foundation for Independence.",
};

export default function StoriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
        <Container className="relative">
          <div className="max-w-3xl py-20 lg:py-24">
            <Badge>Stories</Badge>
            <h1 className="mt-5 text-display-xl font-semibold">
              Real progress, in everyday moments.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Independence is rarely a single milestone — it&apos;s a series of small,
              meaningful wins. A first meal cooked, a bus ride made alone, a job
              interview held with confidence. These are the stories that shape our
              work.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {stories.map((story) => (
              <figure
                key={story.attribution + story.quote.slice(0, 24)}
                className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-8 shadow-soft"
              >
                <svg
                  aria-hidden
                  className="h-10 w-10 text-brand-200"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M9.5 22h-4l3-12h5l-2 6c2 0 3 1 3 3v3h-5Zm14 0h-4l3-12h5l-2 6c2 0 3 1 3 3v3h-5Z" />
                </svg>
                <blockquote className="mt-4 flex-1 font-display text-xl leading-relaxed text-ink">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                {story.highlight ? (
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {story.highlight}
                  </p>
                ) : null}
                <figcaption className="mt-3 border-t border-brand-50 pt-4 text-sm">
                  <div className="font-semibold text-ink">{story.attribution}</div>
                  <div className="text-ink-muted">{story.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-sm text-ink-subtle">
            Note: To protect member and family privacy, the stories above are
            illustrative and reflect the kinds of progress we work toward. Real names
            and identifying details are not used.
          </p>
        </Container>
      </section>

      <CTA
        title="Have a story to share?"
        description="If you'd like to share your experience or learn more about our work, we'd love to hear from you."
        primary={{ label: "Contact our team", href: "/contact" }}
      />
    </>
  );
}
