import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/sections/CTA";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { ArticleBody } from "@/components/article/ArticleBody";
import { Takeaways } from "@/components/article/Takeaways";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { articles, getArticle, getRelatedArticles } from "@/content/articles";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Resource not found" };

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);

  return (
    <>
      <ArticleHeader article={article} />

      <section className="section">
        <Container size="md">
          <article>
            <ArticleBody sections={article.sections} />
            <Takeaways items={article.takeaways} />
          </article>
        </Container>
      </section>

      <RelatedArticles articles={related} />

      <CTA
        title="Have a question or want to talk?"
        description="We're happy to talk through your situation, the Individual Support Plan, or how to get started — no pressure."
        primary={{ label: "Contact our team", href: "/contact" }}
        secondary={{ label: "More resources", href: "/resources" }}
      />
    </>
  );
}
