import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import type { Article } from "@/content/articles";

export function ArticleHeader({ article }: { article: Article }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
      <Container className="relative">
        <div className="max-w-3xl py-16 lg:py-20">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> All resources
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge>{article.category}</Badge>
            <span className="inline-flex items-center gap-1.5 text-xs text-ink-subtle">
              <Calendar className="h-3.5 w-3.5" aria-hidden />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-ink-subtle">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {article.readTime}
            </span>
          </div>

          <h1 className="mt-5 text-display-lg font-semibold">{article.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            {article.intro}
          </p>
        </div>
      </Container>
    </section>
  );
}
