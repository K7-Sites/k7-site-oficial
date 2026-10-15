"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HeroLeadForm } from "@/components/hero-lead-form";
import { trackEvent } from "@/lib/analytics";

const whatsapp = "https://wa.me/5511949214071?text=" + encodeURIComponent("Olá! Vim pela página de Landing Pages da K7 Sites e gostaria de solicitar um orçamento.");
const reviews = "https://share.google/pDIhvdTpTxOyWEIOe";

const testimonials = [
  { name: "Gabriel Rodrigues Da Luz", text: "Excelente trabalho, atendeu a demanda e me deu sugestões que foram eficazes no meu negócio." },
  { name: "Alexandre Do Nascimento Ribeiro Pizatto", text: "Superaram minhas expectativas em todos os sentidos. Finalmente achei uma empresa séria." },
  { name: "Daniele Pedrosa", text: "Amei o site que criou pra mim! Exatamente da forma que solicitei. Excelente profissional!" },
];

const portfolio = [
  { src: "/project-stream/estetica.jpg", label: "Estética" },
  { src: "/project-stream/advocacia.webp", label: "Advocacia" },
  { src: "/project-stream/saude.jpg", label: "Saúde" },
  { src: "/project-stream/gastronomia.jpg", label: "Gastronomia" },
  { src: "/project-stream/higienizacao.jpg", label: "Serviços" },
];

const marquee = ["PROFISSIONALISMO", "CONVERSÃO", "PERSONALIZAÇÃO", "PERFORMANCE", "DESIGN", "ESTRATÉGIA", "COPYWRITING"];

const benefits = [
  ["↗", "Estrutura pensada para converter", "Sua página é organizada para conduzir o visitante até a ação, com menos ruído e mais clareza."],
  ["◉", "Jornada simples e intuitiva", "Cada seção tem um propósito claro para o usuário entender, confiar e avançar sem se perder."],
  ["✦", "Técnicas de texto persuasivas", "Copy estratégica para explicar sua oferta rápido, gerar interesse e estimular o próximo passo."],
  ["◎", "Personalização total (de verdade)", "Visual, tom e argumentos construídos para refletir seu negócio, seu público e seu posicionamento."],
  ["✧", "Credibilidade instantânea", "Hierarquia visual, consistência e prova para elevar a percepção de valor antes da primeira conversa."],
  ["△", "Apoio contínuo", "Ajustes e evolução com orientação próxima, de acordo com o escopo aprovado para o projeto."],
];

const faqs = [
  ["Quanto custa uma Landing Page?", "Os projetos da K7 Sites começam em R$ 399. O valor final varia conforme escopo, conteúdo, integrações e nível de personalização."],
  ["Em quanto tempo fica pronta?", "O prazo é definido na proposta após o briefing e o envio dos materiais. Projetos mais simples podem ter entrega rápida, sem promessa genérica para todo escopo."],
  ["Domínio e hospedagem estão inclusos?", "A K7 pode orientar e configurar domínio e hospedagem. Custos de terceiros e serviços contratados ficam claros na proposta."],
  ["A Landing Page funciona no celular?", "Sim. A experiência é planejada para celular, tablet e computador, com prioridade para leitura, velocidade e conversão."],
  ["Posso anunciar no Google ou Meta Ads?", "Sim. A estrutura pode receber tráfego de campanhas, com CTA, mensuração e conteúdo preparados para trabalhar em conjunto com os anúncios."],
  ["Consigo alterar a página depois?", "Sim. Ajustes e evoluções podem ser feitos conforme o escopo e a necessidade do projeto, sem prender sua operação a uma página engessada."],
];

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function Cta({ children, location, light = false }: { children: React.ReactNode; location: string; light?: boolean }) {
  return <a className={"lp2-btn " + (light ? "lp2-btn-light" : "lp2-btn-primary")} href="#formulario" onClick={() => trackEvent("click_cta_service", { page_path: window.location.pathname, button_location: location, link_text: String(children) })}>{children}<Arrow /></a>;
}

export default function LandingPages() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const sentScroll = useRef({ half: false, almost: false });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: .12 });
    document.querySelectorAll(".lp2-reveal").forEach(el => observer.observe(el));

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const ratio = max > 0 ? scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll", String(ratio));
      document.body.classList.toggle("lp2-scrolled", scrollY > 28);
      if (!sentScroll.current.half && ratio >= .5) {
        sentScroll.current.half = true;
        trackEvent("scroll_50", { page_path: location.pathname });
      }
      if (!sentScroll.current.almost && ratio >= .9) {
        sentScroll.current.almost = true;
        trackEvent("scroll_90", { page_path: location.pathname });
      }
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { observer.disconnect(); removeEventListener("scroll", onScroll); };
  }, []);

  return <main className="lp2-page" id="inicio">
    <div className="lp2-progress" aria-hidden="true" />
    <header className="lp2-header">
      <Link href="/" className="lp2-brand" aria-label="K7 Sites — início"><Image src="/k7-preloader-logo.png" alt="K7 Sites" width={78} height={80} priority/><strong>SITES</strong></Link>
      <nav className={menuOpen ? "lp2-nav is-open" : "lp2-nav"} aria-label="Navegação principal">
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>Projetos</a>
        <a href="#beneficios" onClick={() => setMenuOpen(false)}>Benefícios</a>
        <a href="#processo" onClick={() => setMenuOpen(false)}>Processo</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
      </nav>
      <Cta location="header">Quero minha página</Cta>
      <button className="lp2-menu" type="button" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}><span/><span/></button>
    </header>

    <section className="lp2-hero">
      <div className="lp2-grid" aria-hidden="true"/>
      <div className="lp2-glow lp2-glow-a" aria-hidden="true"/>
      <div className="lp2-wrap lp2-hero-layout">
        <div className="lp2-hero-copy lp2-reveal">
          <p className="lp2-eyebrow">LANDING PAGES QUE TRABALHAM PELO SEU NEGÓCIO</p>
          <h1>Transforme visitas em <em>oportunidades reais.</em></h1>
          <p>Criamos landing pages profissionais, rápidas e estratégicas para apresentar sua oferta com clareza e facilitar o próximo passo do cliente.</p>
          <div className="lp2-hero-actions"><Cta location="hero">Quero vender melhor no digital</Cta><a className="lp2-text-link" href="#portfolio">Ver projetos <Arrow/></a></div>
          <div className="lp2-proof">
            <span><b>R$ 399</b> a partir de</span>
            <span><b>Mobile first</b> em qualquer tela</span>
            <span><b>Contato direto</b> pelo WhatsApp</span>
          </div>
        </div>
        <div className="lp2-hero-art lp2-reveal" aria-label="Mockup responsivo de projeto K7 Sites">
          <div className="lp2-art-aura"/>
          <Image src="/hero-k7-sites-responsive.png" alt="Landing page exibida em monitor, notebook e celular" width={1600} height={1200} priority sizes="(max-width: 900px) 95vw, 760px"/>
        </div>
      </div>
    </section>

    <section className="lp2-marquee" aria-label="Diferenciais">
      {[0,1,2].map((row) => <div className={"lp2-marquee-row row-" + row} key={row}><div className="lp2-marquee-track">{[...marquee,...marquee].map((item,index) => <span className={(index + row) % 2 ? "coral" : "blue"} key={item+index}>{item}</span>)}</div></div>)}
    </section>

    <section className="lp2-section lp2-light" id="portfolio">
      <div className="lp2-wrap">
        <div className="lp2-heading lp2-reveal">
          <p className="lp2-eyebrow dark">LANDING PAGE PODE AUMENTAR SUAS OPORTUNIDADES</p>
          <h2>Alguns projetos que já <em>desenvolvemos.</em></h2>
          <p>Design, mensagem e experiência trabalhando juntos para valorizar negócios de diferentes segmentos.</p>
        </div>
      </div>
      <div className="lp2-portfolio-viewport lp2-reveal">
        <div className="lp2-portfolio-track">
          {[...portfolio,...portfolio].map((item,index) => <article className="lp2-project-card" key={item.label+index}><div className="lp2-browser-bar"><i/><i/><i/><span>k7sites.com.br</span></div><div className="lp2-project-image"><Image src={item.src} alt={"Projeto de landing page para " + item.label} fill sizes="560px"/></div><footer><strong>{item.label}</strong><span>Projeto K7 Sites</span></footer></article>)}
        </div>
      </div>
    </section>

    <section className="lp2-section lp2-dark" id="beneficios">
      <div className="lp2-glow lp2-glow-b" aria-hidden="true"/>
      <div className="lp2-wrap">
        <div className="lp2-heading centered lp2-reveal"><p className="lp2-eyebrow">AUMENTE SUAS OPORTUNIDADES</p><h2>Garantimos tudo o que sua página <em>merece.</em></h2></div>
        <div className="lp2-benefit-grid">{benefits.map(([icon,title,text],index) => <article className="lp2-benefit-card lp2-reveal" style={{ transitionDelay: `${index * 55}ms` }} key={title}><span className="lp2-icon">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="lp2-center"><Cta location="benefits">Começar o desenvolvimento da minha página</Cta></div>
      </div>
    </section>

    <section className="lp2-section lp2-light lp2-difference">
      <div className="lp2-wrap lp2-two">
        <div className="lp2-heading lp2-reveal"><p className="lp2-eyebrow dark">AUMENTE SUAS OPORTUNIDADES</p><h2>Seu projeto é único. <em>Sua página também deveria ser.</em></h2><p>Quando o mercado está cheio de ofertas parecidas, uma página genérica não resolve. Você precisa de uma experiência que deixe claro por que vale a pena escolher você.</p><Cta location="difference">Quero elevar a qualidade do meu projeto</Cta></div>
        <article className="lp2-mobile-card lp2-reveal">
          <span className="lp2-icon">✧</span>
          <div><small>EXPERIÊNCIA NO MOBILE</small><h3>Seu cliente chega pelo celular. Sua página precisa estar pronta.</h3><p>Leitura confortável, CTA visível e navegação direta para manter a experiência fluida até o contato.</p>{/* SUBSTITUIR o percentual por dado próprio quando disponível */}<strong data-counter="70">70%+</strong><span>dos acessos digitais acontecem em dispositivos móveis em muitos mercados</span></div>
          <div className="lp2-phone" aria-hidden="true"><div className="lp2-phone-notch"/><Image src="/project-stream/saude.jpg" alt="" fill sizes="180px"/></div>
        </article>
      </div>
    </section>

    <section className="lp2-section lp2-dark" id="processo">
      <div className="lp2-wrap">
        <div className="lp2-heading centered lp2-reveal"><p className="lp2-eyebrow">PROCESSO CLARO, SEM ENROLAÇÃO</p><h2>Do briefing à publicação em <em>quatro etapas.</em></h2></div>
        <div className="lp2-process">
          <div className="lp2-process-line" aria-hidden="true"/>
          {[
            ["01","Conversa e briefing","Entendemos oferta, público, objetivo e referências."],
            ["02","Estratégia e copy","Organizamos mensagem, argumentos e sequência de conversão."],
            ["03","Design e desenvolvimento","Transformamos a estratégia em uma página rápida, responsiva e profissional."],
            ["04","Publicação e ajustes","Revisamos, publicamos e aplicamos os ajustes previstos no escopo."],
          ].map(([n,t,d],i) => <article className="lp2-step lp2-reveal" style={{ transitionDelay: `${i * 70}ms` }} key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </div>
    </section>

    <section className="lp2-section lp2-light">
      <div className="lp2-wrap">
        <div className="lp2-heading centered lp2-reveal"><p className="lp2-eyebrow dark">FOCO EM CONVERSÃO</p><h2>Não é só ter uma página. É ter uma página com <em>direção.</em></h2></div>
        <div className="lp2-compare">
          <article className="lp2-compare-card before lp2-reveal"><small>SEM ESTRATÉGIA</small><h3>O visitante chega e precisa descobrir sozinho.</h3><ul><li>Mensagem dispersa</li><li>Oferta pouco clara</li><li>CTA escondido</li><li>Visual genérico</li></ul></article>
          <article className="lp2-compare-card after lp2-reveal"><small>COM LANDING PAGE K7</small><h3>Cada seção ajuda a avançar uma decisão.</h3><ul><li>Proposta de valor clara</li><li>Benefícios priorizados</li><li>Próximo passo visível</li><li>Experiência alinhada à marca</li></ul></article>
        </div>
      </div>
    </section>

    <section className="lp2-section lp2-proof-section">
      <div className="lp2-wrap">
        <div className="lp2-heading centered lp2-reveal"><p className="lp2-eyebrow">PROVA SOCIAL REAL</p><h2>Quem contrata precisa sentir que fez <em>a escolha certa.</em></h2></div>
        <div className="lp2-testimonials">{testimonials.map((item,index) => <article className="lp2-testimonial lp2-reveal" key={item.name} style={{ transitionDelay: `${index * 65}ms` }}><div className="lp2-stars">★★★★★</div><p>“{item.text}”</p><footer><span className="lp2-avatar">{item.name.slice(0,1)}</span><div><strong>{item.name}</strong><a href={reviews} target="_blank" rel="noreferrer">Ver avaliação no Google ↗</a></div></footer></article>)}</div>
      </div>
    </section>

    <section className="lp2-section lp2-light" id="faq">
      <div className="lp2-wrap lp2-faq-layout">
        <div className="lp2-heading lp2-reveal"><p className="lp2-eyebrow dark">SEM LETRAS MIÚDAS</p><h2>Dúvidas antes de começar? <em>Vamos direto ao ponto.</em></h2><p>As respostas que normalmente ajudam a decidir com mais segurança.</p></div>
        <div className="lp2-faq-list">{faqs.map(([q,a],index) => <article className={openFaq === index ? "lp2-faq is-open" : "lp2-faq"} key={q}><button type="button" onClick={() => { const next = openFaq === index ? null : index; setOpenFaq(next); if (next !== null) trackEvent("faq_open", { page_path: window.location.pathname, question: q }); }} aria-expanded={openFaq === index}><span>{q}</span><i>{openFaq === index ? "−" : "+"}</i></button><div><p>{a}</p></div></article>)}</div>
      </div>
    </section>

    <section className="lp2-final">
      <div className="lp2-marquee lp2-marquee-bg" aria-hidden="true">{[0,1].map(row => <div className={"lp2-marquee-row row-"+row} key={row}><div className="lp2-marquee-track">{[...marquee,...marquee].map((item,index) => <span className={(index+row)%2?"coral":"blue"} key={item+index}>{item}</span>)}</div></div>)}</div>
      <div className="lp2-wrap"><div className="lp2-final-card lp2-reveal"><p className="lp2-eyebrow">PRÓXIMO PASSO</p><h2>Chegou o momento de colocar sua marca em um <em>patamar acima.</em></h2><p>DESTAQUE SEU PRODUTO OU SERVIÇO NO DIGITAL.</p><Cta location="final" light>Quero falar sobre meu projeto</Cta></div></div>
    </section>

    <section className="lp2-form-section" id="formulario">
      <div className="lp2-wrap lp2-form-layout">
        <div className="lp2-heading lp2-reveal"><p className="lp2-eyebrow dark">ORÇAMENTO PERSONALIZADO</p><h2>Vamos transformar sua ideia em uma página que <em>vende melhor.</em></h2><p>O formulário abaixo é o mesmo integrado ao K7 Gestão. Sua solicitação continua chegando ao CRM com origem, serviço e rastreamento preservados.</p></div>
        <div className="lp2-form-shell lp2-reveal"><HeroLeadForm placement="lp-contact" /></div>
      </div>
    </section>

    <footer className="lp2-footer">
      <div className="lp2-wrap"><Link href="/" className="lp2-footer-brand"><Image src="/k7-preloader-logo.png" alt="K7 Sites" width={70} height={72}/><strong>K7 SITES</strong></Link><p>Landing pages profissionais para transformar atenção em oportunidade.</p><nav><a href="#portfolio">Projetos</a><a href="#beneficios">Benefícios</a><a href="#faq">FAQ</a><a href="#formulario">Orçamento</a></nav><small>© {new Date().getFullYear()} K7 Sites.</small></div>
    </footer>

    <a className="lp2-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp" onClick={() => trackEvent("click_whatsapp", { button_location: "floating_button", page_path: window.location.pathname, link_text: "Falar pelo WhatsApp" })}><Image src="/whatsapp.svg" alt="" width={28} height={28}/></a>
    <a className="lp2-mobile-cta" href="#formulario" onClick={() => trackEvent("click_cta_service", { page_path: window.location.pathname, button_location: "mobile_fixed", link_text: "Falar sobre meu projeto" })}>Falar sobre meu projeto <Arrow/></a>
  </main>;
}
