"use client";
import Image from "next/image";

export function LegalFooter() {
  return (
    <footer className="k7-legal-footer" aria-label="Rodapé da K7 Sites">
      <div className="k7-legal-footer-inner">
        <div className="k7-legal-footer-brand">
          <a href="/" aria-label="K7 Sites — página inicial"><Image src="/k7-preloader-logo.png" alt="K7 Sites" width={104} height={108} /></a>
          <p>Criação de sites e landing pages com atendimento 100% online.</p>
        </div>
        <nav aria-label="Navegação e informações legais">
          <a href="/#servicos">Serviços</a>
          <a href="/#projetos">Projetos</a>
          <a href="/#processo">Processo</a>
          <a href="/#sobre">Sobre</a>
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="/termos-de-servico">Termos de Serviço</a>
          <a href="/politica-de-reembolso">Reembolso e Cancelamento</a>
          <button type="button" className="k7-legal-consent-link" onClick={() => window.dispatchEvent(new Event("k7:reopen-consent"))}>Rever consentimento</button>
        </nav>
        <div className="k7-legal-footer-info">
          <p>Responsável: Kassio Kennedy · Atendimento online.</p>
          <a className="k7-footer-whatsapp" href="https://wa.me/5511949214071" target="_blank" rel="noopener noreferrer">WhatsApp: (11) 94921-4071</a>
        </div>
      </div>
      <div className="k7-footer-bottom"><span>© {new Date().getFullYear()} K7 Sites. Todos os direitos reservados.</span><span>Design e desenvolvimento: K7 Sites</span><a href="/">Voltar ao início ↑</a></div>
    </footer>
  );
}
