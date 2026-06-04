import type { Article } from "./types";
import { transitionPlanning101 } from "./transition-planning-101";
import { buildingDailyRoutines } from "./building-daily-routines";
import { firstJobReadiness } from "./first-job-readiness";
import { selfAdvocacyEveryday } from "./self-advocacy-everyday";
import { communityBelonging } from "./community-belonging";
import { workingWithDdd } from "./working-with-ddd";
import { supportedEmploymentJobCoaching } from "./supported-employment-job-coaching";
import { guardianshipAndAlternatives } from "./guardianship-and-alternatives";
import { moneySkillsIndependentLiving } from "./money-skills-independent-living";
import { friendshipsSocialConnection } from "./friendships-social-connection";

export type { Article, ArticleCategory, ArticleSection, ArticleBullet, ArticleCallout } from "./types";

export const articles: Article[] = [
  transitionPlanning101,
  buildingDailyRoutines,
  firstJobReadiness,
  selfAdvocacyEveryday,
  communityBelonging,
  workingWithDdd,
  supportedEmploymentJobCoaching,
  guardianshipAndAlternatives,
  moneySkillsIndependentLiving,
  friendshipsSocialConnection,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  if (article.related?.length) {
    const related = article.related
      .map((slug) => articles.find((a) => a.slug === slug))
      .filter((a): a is Article => Boolean(a));
    if (related.length) return related.slice(0, limit);
  }
  return articles.filter((a) => a.slug !== article.slug).slice(0, limit);
}
