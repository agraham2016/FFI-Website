import { Container } from "@/components/layout/Container";
import { ArticleCard } from "./ArticleCard";
import type { Article } from "@/content/articles";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (!articles.length) return null;
  return (
    <section className="section bg-surface-alt">
      <Container>
        <h2 className="font-display text-2xl font-semibold text-ink">
          Continue reading
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          More guides for families, individuals, and care teams.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
