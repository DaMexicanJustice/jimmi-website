import type { MetadataRoute } from "next";
import { employees } from "./lib/employees";
import { SERVICES, absoluteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority,
  });

  return [
    page("/", 1),
    ...SERVICES.map((s) => page(s.href, 0.8)),
    page("/employees/", 0.7),
    ...employees.map((e) => page(`/employees/${e.slug}/`, 0.5)),
    page("/contact/", 0.7),
    page("/social-feed/", 0.5),
    page("/presentation-card/", 0.3),
  ];
}
