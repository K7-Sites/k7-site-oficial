import type { Metadata } from "next";
import { HeroLeadForm } from "@/components/hero-lead-form";
import { WhatsAppContact } from "./whatsapp-contact";
import styles from "./page.module.css";

const title = "Solicite seu orçamento de landing page | K7 Sites";
const description = "Dê ao seu negócio uma página à altura do seu serviço. Preencha o formulário e converse com a K7 sobre seu projeto.";
const canonical = "https://www.k7sites.com.br/solicitar-orcamento";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "K7 Sites — solicite seu orçamento" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RequestQuotePage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#conteudo">Ir para o formulário</a>
      <main id="conteudo" className={styles.content}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>K7 SITES · LANDING PAGES PERSONALIZADAS</p>
          <h1>Seu serviço merece <span>mais que uma visita.</span></h1>
          <p className={styles.description}>Apresente seu negócio com clareza, transmita confiança e facilite o próximo contato pelo WhatsApp.</p>
        </header>
        <section className={styles.form} aria-label="Solicitar orçamento de projeto">
          <HeroLeadForm placement="lp-capture" copy={{
            kicker: "O PRÓXIMO PASSO É SIMPLES",
            title: "Vamos criar sua página?",
            description: "Preencha abaixo. A K7 entra em contato pelo WhatsApp para entender seu projeto e preparar uma proposta.",
            submitLabel: "Quero uma proposta para meu negócio",
          }} />
        </section>
      </main>
      <footer className={styles.footer}>K7 Sites · Seu negócio bem apresentado.</footer>
      <WhatsAppContact className={styles.whatsapp} />
    </div>
  );
}
