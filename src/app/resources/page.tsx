import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/sections/CTA";
import { Badge } from "@/components/ui/Badge";
import { ArticleCard } from "@/components/article/ArticleCard";
import { articles, type ArticleCategory } from "@/content/articles";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical guides on transition planning, daily routines, employment readiness, self-advocacy, community belonging, and working with DDD — for families, individuals, and care teams.",
};

const allCategories: ArticleCategory[] = [
  "Family Guide",
  "Independence",
  "Employment",
  "Community",
];

export default function ResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
        <Container className="relative">
          <div className="max-w-3xl py-20 lg:py-24">
            <Badge>Resources</Badge>
            <h1 className="mt-5 text-display-xl font-semibold">
              Practical guides for families and care teams.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Plain-language articles on transition planning, building daily routines,
              employment readiness, self-advocacy, community belonging, and the
              everyday work of growing into adulthood.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {allCategories.map((category) => {
                const count = articles.filter((a) => a.category === category).length;
                return (
                  <span
                    key={category}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-medium text-brand-800 backdrop-blur"
                  >
                    {category}
                    <span className="text-brand-500">·</span>
                    <span className="text-brand-600">{count}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {allCategories.map((category) => {
        const categoryArticles = articles.filter((a) => a.category === category);
        if (!categoryArticles.length) return null;
        return (
          <section
            key={category}
            className="border-t border-brand-100 py-16 first:border-0 sm:py-20"
          >
            <Container>
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <span className="eyebrow">{category}</span>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
                    {categoryHeadings[category]}
                  </h2>
                </div>
                <p className="text-sm text-ink-subtle">
                  {categoryArticles.length}{" "}
                  {categoryArticles.length === 1 ? "guide" : "guides"}
                </p>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <CTA
        title="Want updates as new guides are published?"
        description="Get in touch and we'll keep you posted as new articles, services, and stories become available."
        primary={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}

const categoryHeadings: Record<ArticleCategory, string> = {
  "Family Guide": "Guides for families navigating the system",
  Independence: "Building daily independence",
  Employment: "Working toward meaningful employment",
  Community: "Belonging and community life",
};
