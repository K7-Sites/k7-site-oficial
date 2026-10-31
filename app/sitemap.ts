import type { MetadataRoute } from "next";

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
    ...["politica-de-privacidade", "termos-de-servico", "politica-de-reembolso"].map(path => ({ url: "https://www.k7sites.com.br/" + path, changeFrequency: "yearly" as const, priority: 0.3 })),
  ];
}
