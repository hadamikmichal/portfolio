import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Fixed date: update when the content changes meaningfully.
// (A runtime `new Date()` would make the route dynamic under Cache Components.)
const LAST_MODIFIED = "2026-11-12";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
