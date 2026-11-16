import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mensagem recebida | K7 Sites",
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
        <Image
          className={styles.portrait}
          src="/kassio-kennedy/kassio-kennedy-desenvolvimento.jpg"
          alt="Kassio, do time K7 Sites"
          width={128}
          height={128}
          priority
        />

        <h1>
          <span>Mensagem recebida</span>
          <svg className={styles.check} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="m7.5 12 3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </h1>
        <p className={styles.lead}>
          Olá! Meu nome é Kassio e faço parte do time K7 Sites. Em alguns minutos,
          entrarei em contato com você.
        </p>
        <p className={styles.contactPrompt}>
          Caso prefira, você pode entrar em contato agora mesmo pelo número abaixo. 👇
        </p>

        <div className={styles.actions}>
          <a className={styles.secondary} href="https://wa.me/5511992108602" target="_blank" rel="noopener noreferrer" aria-label="Conversar com Kassio no WhatsApp: (11) 99210-8602">
            <Image src="/whatsapp.svg" alt="" width={22} height={22} />
            (11) 99210-8602
          </a>
          <Link className={styles.primary} href="/">Voltar para o site <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}
