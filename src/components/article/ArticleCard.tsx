import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/content/articles";
import { cn } from "@/lib/cn";

const categoryColors: Record<Article["category"], string> = {
  "Family Guide": "from-brand-100 via-brand-50 to-accent-100",
  Independence: "from-accent-100 via-accent-50 to-brand-50",
  Employment: "from-brand-200/60 via-brand-100 to-accent-100",
  Community: "from-accent-200/60 via-accent-50 to-brand-100",
};

export function ArticleCard({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-card",
        className
      )}
    >
      <div
        className={cn(
          "relative h-40 overflow-hidden bg-gradient-to-br",
          categoryColors[article.category]
        )}
      >
        <div aria-hidden className="absolute inset-0 bg-grid-soft opacity-60" />
        <div className="absolute bottom-3 left-3">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800 backdrop-blur">
            {article.category}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-ink group-hover:text-brand-700">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {article.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-brand-50 pt-4 text-xs text-ink-subtle">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition group-hover:gap-2.5">
          Read guide <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
