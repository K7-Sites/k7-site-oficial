import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mensagem recebida com sucesso | K7 Sites",
  description: "Confirmação de envio do formulário de contato da K7 Sites.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MessageReceivedPage() {
  return (
    <main className={styles.page}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <section className={styles.card}>
        <Link className={styles.logo} href="/" aria-label="Voltar para a K7 Sites">
          <Image src="/k7-preloader-logo.png" alt="K7 Sites" width={132} height={136} priority />
        </Link>
        <div className={styles.icon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className={styles.eyebrow}>MENSAGEM ENVIADA</p>
        <h1>Em minutos <em>entraremos em contato.</em></h1>
        <p className={styles.lead}>
          Recebemos sua mensagem. Nossa equipe retornará em breve.
        </p>

        <div className={styles.actions}>
          <Link className={styles.primary} href="/">Voltar para o site <span>→</span></Link>
        </div>

        <p className={styles.note}>
          Se precisar complementar alguma informação, envie um e-mail para <a href="mailto:k7sites@gmail.com">k7sites@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}
