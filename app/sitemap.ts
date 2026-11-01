import type { MetadataRoute } from "next";
import { pages } from "@/lib/niche-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.k7sites.com.br/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.k7sites.com.br/criacao-de-landing-pages/",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...pages.map(([slug]) => ({ url: "https://www.k7sites.com.br/" + slug, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...["politica-de-privacidade", "termos-de-servico", "politica-de-reembolso"].map(path => ({ url: "https://www.k7sites.com.br/" + path, changeFrequency: "yearly" as const, priority: 0.3 })),
  ];
}
