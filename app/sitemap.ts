import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { formations } from "@/lib/config/formations";
import { getCityProfiles } from "@/lib/config/cities";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/formations`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/formations-ia`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${base}/conseil`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/a-propos`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/faq`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/contact`, priority: 0.6, changeFrequency: "monthly" },
  ].map((r) => ({ ...r, lastModified: now }));

  const formationRoutes: MetadataRoute.Sitemap = formations.map((f) => ({
    url: `${base}/formations/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const cityRoutes: MetadataRoute.Sitemap = getCityProfiles().map((c) => ({
    url: `${base}/formations-ia/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...formationRoutes, ...cityRoutes, ...blogRoutes];
}
