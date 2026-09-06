import type { Metadata } from "next";
import LandingPages from "./landing-pages";
import "./landing-pages.css";

const canonical = "https://www.k7sites.com.br/criacao-de-landing-pages/";
const siteUrl = "https://www.k7sites.com.br/";

export const metadata: Metadata = {
  title: "Criação de Landing Page Profissional a partir de R$ 399 | K7 Sites",
  description: "Criação de landing pages profissionais, rápidas e responsivas para empresas e prestadores de serviço. Projetos personalizados a partir de R$ 399, com foco em apresentação, SEO e contato pelo WhatsApp.",
  keywords: [
    "criação de landing page",
    "criação de landing pages",
    "landing page profissional",
    "landing page para empresas",
    "landing page para captar clientes",
    "landing page preço",
  ],
  alternates: {
    canonical,
    languages: { "pt-BR": canonical },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Criação de Landing Page Profissional | K7 Sites",
    description: "Landing pages personalizadas para empresas e profissionais, com design responsivo, estrutura preparada para SEO e contato direto pelo WhatsApp.",
    url: canonical,
    siteName: "K7 Sites",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "K7 Sites — criação de landing pages profissionais" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Landing Page Profissional | K7 Sites",
    description: "Landing pages profissionais e responsivas a partir de R$ 399 para empresas e prestadores de serviço.",
    images: ["/og.png"],
  },
};

const faq = [
  ["O que é uma Landing Page?", "É uma página criada para apresentar uma oferta, serviço ou empresa com clareza e conduzir o visitante a uma ação específica, como pedir um orçamento pelo WhatsApp."],
  ["Qual a diferença entre site e Landing Page?", "A Landing Page concentra a comunicação em um objetivo principal. Um site institucional costuma reunir várias páginas e informações mais amplas sobre a empresa."],
  ["Quanto custa uma Landing Page?", "Os projetos de Landing Page da K7 Sites começam em R$ 399,00. O valor final depende do conteúdo, das funcionalidades e das integrações necessárias."],
  ["Quanto tempo demora para ficar pronta?", "O prazo é definido conforme o escopo e começa após aprovação, pagamento inicial e envio dos materiais. Dependendo do projeto, a entrega pode ocorrer em até 48 horas, sem transformar esse prazo em garantia para todo escopo."],
  ["A página funciona no celular?", "Sim. A experiência é planejada para celular, tablet e computador, com atenção especial à leitura, velocidade e aos botões de contato."],
  ["Uma Landing Page pode aparecer no Google?", "Sim. A página pode ser preparada para indexação e boas práticas de SEO. O posicionamento depende também da qualidade do conteúdo, concorrência, autoridade do domínio e evolução da estratégia."],
  ["Landing Page serve para anúncios?", "Sim. Landing pages podem receber tráfego de campanhas e organizar a oferta em uma página focada em uma ação, desde que anúncios, conteúdo e medição estejam alinhados."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: "Criação de Landing Page Profissional",
      description: "Serviço de criação de landing pages profissionais, responsivas e preparadas para SEO pela K7 Sites.",
      inLanguage: "pt-BR",
      isPartOf: { "@type": "WebSite", "@id": `${siteUrl}#website`, name: "K7 Sites", url: siteUrl },
      about: { "@id": `${canonical}#service` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "K7 Sites", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Criação de Landing Pages", item: canonical },
      ],
    },
    {
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: "Criação de Landing Pages Profissionais",
      serviceType: "Criação de landing page",
      description: "Criação de landing pages personalizadas, responsivas e preparadas para SEO, com estrutura de conversão e direcionamento para contato pelo WhatsApp.",
      url: canonical,
      areaServed: { "@type": "Country", name: "Brasil" },
      provider: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "K7 Sites",
        url: siteUrl,
        email: "k7sites@gmail.com",
        telephone: "+5511949214071",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "BRL",
        price: "399",
        url: canonical,
        availability: "https://schema.org/InStock",
        description: "Landing pages a partir de R$ 399,00; valor final conforme o escopo do projeto.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text },
      })),
    },
  ],
};

export default function LandingPagesRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LandingPages />
    </>
  );
}
