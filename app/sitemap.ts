import type { MetadataRoute } from "next";
import { projects, site } from "@/content/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/about", "/contact"].map((path) => ({ url: `${site.url}${path}` }));
  const work = projects.map((p) => ({ url: `${site.url}/projects/${p.slug}` }));
  return [...pages, ...work];
}
