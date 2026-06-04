export type ArticleCategory =
  | "Family Guide"
  | "Independence"
  | "Employment"
  | "Community";

export type ArticleBullet = {
  /** Optional bold lead-in for the bullet (e.g. "Start small.") */
  label?: string;
  body: string;
};

export type ArticleCallout = {
  title: string;
  body: string;
  /** Visual tone — defaults to "tip". */
  tone?: "tip" | "info" | "note";
};

export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: ArticleBullet[];
  /** A list of short checklist-style items. */
  checklist?: string[];
  callout?: ArticleCallout;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  readTime: string;
  date: string;
  /** Lead paragraph shown above the body. */
  intro: string;
  sections: ArticleSection[];
  takeaways: string[];
  /** Slugs of related articles. If omitted, the renderer falls back to other articles. */
  related?: string[];
};
