
import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaleri.ai";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
  const staticRoutes = ["", "/pricing", "/faq", "/dashboard"].map((p) => ({
    url: `${siteUrl}${p || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const dynamicRoutes: MetadataRoute.Sitemap = [
    // { url: `${siteUrl}/blog/ai-calories`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
