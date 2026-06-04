import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/content/articles";
import { tools } from "@/content/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/supported-living",
    "/services/employment",
    "/service-areas",
    "/stories",
    "/resources",
    "/faq",
    "/contact",
    "/careers",
    "/tools",
    "/privacy",
    "/accessibility",
  ];

  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${site.url}/resources/${article.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const toolEntries: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${site.url}${tool.href}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: tool.featured ? 0.8 : 0.6,
  }));

  return [...staticEntries, ...articleEntries, ...toolEntries];
}
