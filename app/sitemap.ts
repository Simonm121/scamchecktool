import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/faq",
  "/guides",
  "/privacy-policy",
  "/terms-and-conditions",
  "/scam-checker",
  "/link-checker",
  "/deepfake-checker",
];

const guideRoutes = [
  "/guides/how-to-tell-if-a-message-is-a-scam",
  "/guides/how-to-check-if-a-link-is-safe",
  "/guides/how-to-spot-a-fake-image-or-deepfake",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...staticRoutes, ...guideRoutes];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-05-06"),
  }));
}
