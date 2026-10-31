import type { MetadataRoute } from "next";

const base = "https://www.matepro.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/mobile-wash`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
