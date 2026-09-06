import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import "./whatsapp-tooltip.css";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

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
  title: "Criação de Sites e Landing Pages Profissionais | K7 Sites",
  description: "A K7 Sites cria sites institucionais e landing pages personalizados para empresas e profissionais. Conheça os projetos e solicite um orçamento.",
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
    title: "Criação de Sites e Landing Pages Profissionais | K7 Sites",
    description: "Sites institucionais e landing pages personalizados para apresentar seus serviços, transmitir confiança e facilitar novos contatos.",
    url: "https://www.k7sites.com.br/",
    siteName: "K7 Sites",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "K7 Sites — criação de sites e landing pages profissionais" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites e Landing Pages Profissionais | K7 Sites",
    description: "Sites e landing pages personalizados para empresas e profissionais.",
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
        ["Em quanto tempo meu site fica pronto?", "O prazo é definido conforme o escopo e começa após a aprovação, o pagamento inicial e o envio de todos os materiais. O projeto pode ficar pronto antes do prazo previsto."],
        ["A página funciona bem no celular?", "Sim. O layout é planejado para desktop, tablet e celular, com atenção especial à leitura, aos botões e aos formulários."],
        ["Eu preciso enviar os textos e as imagens?", "Você pode enviar os materiais disponíveis. A K7 organiza o conteúdo e orienta sobre o que estiver faltando. Produções específicas podem ser incluídas no orçamento."],
        ["Domínio e hospedagem estão incluídos?", "Esses serviços são definidos no orçamento. Se ainda não tiver domínio ou hospedagem, você recebe orientação para escolher e configurar."],
        ["Posso pedir alterações?", "Sim. A quantidade de rodadas de ajustes é registrada na proposta para que o processo seja organizado e previsível para os dois lados."],
        ["O pagamento é feito como?", "A condição padrão é 50% antes do início do projeto e 50% na conclusão, antes da publicação definitiva ou liberação dos acessos finais."],
        ["Depois da entrega consigo editar?", "Isso depende da tecnologia escolhida. Em projetos com painel de gerenciamento, você recebe orientação básica para realizar atualizações simples."],
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
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      </body>
    </html>
  );
}
