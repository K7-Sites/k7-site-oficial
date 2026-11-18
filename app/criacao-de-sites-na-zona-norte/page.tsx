import type { Metadata } from "next";
import CriacaoDeSitesNaZonaNorte from "./criacao-de-sites-na-zona-norte";

const canonical = "https://www.k7sites.com.br/criacao-de-sites-na-zona-norte/";
const home = "https://www.k7sites.com.br/";

export const metadata: Metadata = {
  title: "Criação de Sites na Zona Norte de SP | K7 Sites",
  description:
    "Criação de sites na Zona Norte de São Paulo: sites profissionais, landing pages, SEO e design responsivo para empresas. Solicite uma proposta à K7 Sites.",
  keywords: [
    "criação de sites na Zona Norte",
    "criação de sites Zona Norte SP",
    "site profissional Zona Norte de São Paulo",
    "desenvolvimento de sites Zona Norte",
    "landing page Zona Norte SP",
    "sites para empresas na Zona Norte",
  ],
  alternates: {
    canonical,
    languages: { "pt-BR": canonical },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Criação de Sites na Zona Norte de São Paulo | K7 Sites",
    description:
      "Sites e landing pages profissionais para negócios da Zona Norte de SP, com SEO técnico, design responsivo e contato pelo WhatsApp.",
    url: canonical,
    siteName: "K7 Sites",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "K7 Sites — criação de sites profissionais na Zona Norte de São Paulo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites na Zona Norte de SP | K7 Sites",
    description:
      "Sites profissionais e landing pages para empresas da Zona Norte de São Paulo.",
    images: ["/og.png"],
  },
};

const faq = [
  {
    question: "Quanto custa criar um site na Zona Norte de São Paulo?",
    answer:
      "O investimento depende do tipo de página, da quantidade de conteúdo, das funcionalidades e das integrações necessárias. A K7 Sites apresenta uma proposta personalizada após entender o seu projeto.",
  },
  {
    question: "A K7 Sites atende empresas de Santana, Tucuruvi e Jaçanã?",
    answer:
      "Sim. Atendemos online empresas e profissionais de Santana, Tucuruvi, Jaçanã e de outros bairros da Zona Norte de São Paulo, além de clientes de outras regiões do Brasil.",
  },
  {
    question: "Meu site vai aparecer no Google?",
    answer:
      "O projeto é desenvolvido com boas práticas de SEO técnico, como estrutura semântica, títulos e conteúdo relevante, para facilitar a indexação. A posição nos resultados depende também da concorrência, da autoridade do domínio e da evolução do conteúdo; não há garantia de primeira posição.",
  },
  {
    question: "Qual é a diferença entre site institucional e landing page?",
    answer:
      "O site institucional apresenta a empresa, seus serviços e diferentes informações em uma estrutura mais ampla. A landing page concentra o conteúdo em uma oferta ou objetivo específico, como solicitar um orçamento.",
  },
  {
    question: "Preciso comparecer presencialmente para contratar?",
    answer:
      "Não. O atendimento da K7 Sites é 100% online. O briefing, a apresentação da proposta, o acompanhamento e as aprovações podem ser feitos a distância.",
  },
  {
    question: "O site pode ter botão de WhatsApp e formulário de contato?",
    answer:
      "Sim. Podemos incluir botões de WhatsApp, formulários e chamadas para ação de acordo com as necessidades e o escopo aprovado para o projeto.",
  },
  {
    question: "Em quanto tempo o site fica pronto?",
    answer:
      "O prazo é definido na proposta conforme o escopo, a aprovação do layout e o envio dos materiais necessários. Projetos mais simples podem ter entrega ágil, mas o prazo não é igual para todos os trabalhos.",
  },
  {
    question: "Vocês também gerenciam campanhas de Google Ads?",
    answer:
      "A K7 Sites desenvolve sites e landing pages que podem receber visitantes de anúncios, mas não realiza a gestão das campanhas de mídia paga.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: "Criação de Sites na Zona Norte de São Paulo",
      description:
        "Desenvolvimento de sites profissionais e landing pages para empresas da Zona Norte de São Paulo pela K7 Sites.",
      inLanguage: "pt-BR",
      isPartOf: { "@type": "WebSite", name: "K7 Sites", url: home },
      about: { "@id": `${canonical}#service` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "K7 Sites", item: home },
        {
          "@type": "ListItem",
          position: 2,
          name: "Criação de sites na Zona Norte",
          item: canonical,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: "Criação de Sites na Zona Norte de São Paulo",
      serviceType: "Criação de sites profissionais e landing pages",
      url: canonical,
      description:
        "Criação de sites institucionais e landing pages com design responsivo, SEO técnico e integração de contato pelo WhatsApp.",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Zona Norte de São Paulo",
        containedInPlace: { "@type": "City", name: "São Paulo" },
      },
      provider: {
        "@type": "Organization",
        name: "K7 Sites",
        url: home,
        logo: `${home}k7-logo.png`,
        telephone: "+5511992108602",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function CriacaoDeSitesZonaNortePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <CriacaoDeSitesNaZonaNorte faq={faq} />
    </>
  );
}
