import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import "./whatsapp-tooltip.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.k7sites.com.br"),
  title: "Criação de Sites e Landing Pages | K7 Sites",
  description: "Criação de sites profissionais e landing pages estratégicas para valorizar sua marca e gerar oportunidades. Projetos a partir de R$ 399.",
  alternates: {
    canonical: "https://www.k7sites.com.br/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/k7-logo.png",
    shortcut: "/k7-preloader-logo.png",
  },
  openGraph: {
    title: "Criação de Sites e Landing Pages | K7 Sites",
    description: "Criação de sites profissionais e landing pages estratégicas para valorizar sua marca e gerar oportunidades. Projetos a partir de R$ 399.",
    url: "https://www.k7sites.com.br/",
    siteName: "K7 Sites",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "K7 Sites — criação de sites e landing pages profissionais" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites e Landing Pages | K7 Sites",
    description: "Sites profissionais e landing pages estratégicas para valorizar sua marca e gerar novas oportunidades.",
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "K7 Sites",
      url: "https://www.k7sites.com.br/",
    },
    {
      "@type": "Organization",
      name: "K7 Sites",
      url: "https://www.k7sites.com.br/",
      logo: "https://www.k7sites.com.br/k7-logo.png",
      email: "k7sites@gmail.com",
      telephone: "+5511949214071",
    },
    {
      "@type": "Service",
      serviceType: "Criação de sites profissionais",
      name: "Criação de sites institucionais",
      description: "Criação de sites institucionais personalizados para apresentar empresas, serviços, diferenciais, projetos e canais de contato.",
      provider: { "@type": "Organization", name: "K7 Sites", url: "https://www.k7sites.com.br/" },
      areaServed: "BR",
      url: "https://www.k7sites.com.br/#servicos",
    },
    {
      "@type": "Service",
      serviceType: "Criação de landing page",
      name: "Criação de landing pages profissionais",
      description: "Criação de landing pages personalizadas para apresentar ofertas e facilitar pedidos de orçamento e contatos.",
      provider: { "@type": "Organization", name: "K7 Sites", url: "https://www.k7sites.com.br/" },
      areaServed: "BR",
      url: "https://www.k7sites.com.br/#servicos",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        ["Quanto custa criar um site profissional?", "Na K7 Sites, temos projetos a partir de R$ 399. O valor final depende do tipo de site, das funcionalidades e das necessidades do seu negócio."],
        ["Qual é o prazo para desenvolver o projeto?", "O prazo é definido conforme o escopo, a aprovação da proposta e o envio dos materiais necessários. A estimativa é apresentada antes do início do desenvolvimento."],
        ["Meu site vai funcionar no celular?", "Sim. Desenvolvemos sites responsivos, adaptados para diferentes tamanhos de tela."],
        ["O site é preparado para SEO?", "Sim. Aplicamos boas práticas técnicas para facilitar a indexação e a compreensão do conteúdo pelos buscadores. O posicionamento também depende de conteúdo, concorrência e autoridade do domínio."],
        ["Posso usar a página em campanhas do Google Ads?", "Sim. Landing pages e sites podem receber tráfego de campanhas. Também deixamos a estrutura preparada para mensuração dos principais pontos de conversão quando isso fizer parte do projeto."],
        ["Posso solicitar uma landing page para anúncios?", "Sim. Criamos landing pages pensadas para apresentar ofertas, receber visitantes de campanhas e facilitar a captação de contatos."],
        ["Já tenho um site. Vocês podem modernizá-lo?", "Sim. Podemos avaliar seu site atual e apresentar uma proposta de redesign de acordo com suas necessidades."],
        ["Domínio e hospedagem estão incluídos?", "Esses serviços são definidos no orçamento. Se ainda não tiver domínio ou hospedagem, você recebe orientação para escolher e configurar."],
        ["Posso pedir alterações?", "Sim. A quantidade de rodadas de ajustes é registrada na proposta para que o processo seja organizado e previsível para os dois lados."],
        ["Existe suporte depois da publicação?", "O suporte e as evoluções após a entrega dependem do escopo contratado. Quando necessário, podemos avaliar ajustes e melhorias em uma nova etapa."],
        ["Como faço para solicitar um orçamento?", "Basta preencher o formulário com seu nome, WhatsApp e o serviço desejado. Nossa equipe entrará em contato para entender melhor seu projeto."],
      ].map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${sora.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2PK8GHK05G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2PK8GHK05G');`}
        </Script>
      </body>
    </html>
  );
}
