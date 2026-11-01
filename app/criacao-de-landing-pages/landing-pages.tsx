"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { HeroLeadForm } from "@/components/hero-lead-form";
import { trackEvent } from "@/lib/analytics";

const whatsapp = "https://wa.me/5511949214071?text=" + encodeURIComponent("Olá! Vim pela página de Landing Pages da K7 Sites e gostaria de solicitar um orçamento.");
const reviewsUrl = "https://share.google/pDIhvdTpTxOyWEIOe";

const marquee = ["PROFISSIONALISMO", "CONVERSÃO", "PERSONALIZAÇÃO", "PERFORMANCE", "DESIGN", "ESTRATÉGIA", "COPYWRITING"];

const projects = [
  {
    id: "smilo",
    label: "Smilo CRM Odontológico",
    url: "https://www.smilo.com.br/",
    src: "/projetos-k7/smilo.png",
    description: "Site institucional de software para clínicas odontológicas, com apresentação de módulos, agenda, prontuário, cobranças, planos e prova social.",
  },
  {
    id: "barbearia",
    label: "Barbearia",
    url: "https://kassio07.github.io/Barbearia/",
    src: "/projetos-k7/barbearia.png",
    description: "Landing page para barbearia com apresentação dos serviços, posicionamento premium e chamadas diretas para agendamento.",
  },
  {
    id: "advocacia",
    label: "Advocacia",
    url: "https://kassio07.github.io/Advogado/",
    src: "/projetos-k7/advocacia.png",
    description: "Projeto institucional para advocacia com foco em autoridade, áreas de atuação, confiança e facilidade de contato.",
  },
  {
    id: "cruzeiro",
    label: "Cruzeiro Esporte Clube + CRM",
    url: "https://cruzeiroesporteclube.com.br/",
    src: "/projetos-k7/cruzeiro-crm.png",
    description: "Site institucional integrado a CRM, estruturado para conteúdo, relacionamento e operação digital do clube.",
  },
  {
    id: "agencia",
    label: "Agência Diva",
    url: "https://www.agenciadiva.com/mentoria-agencia-diva",
    src: "/projetos-k7/agencia-diva.png",
    description: "Landing page de mentoria com narrativa comercial, apresentação da oferta, prova e CTA orientado à conversão.",
  },
  {
    id: "higienizacao",
    label: "Quality Higienização",
    url: "https://qualityhigienizacao.com.br/",
    src: "/projetos-k7/quality-higienizacao.png",
    description: "Página de serviços para higienização de estofados com comunicação objetiva, benefícios e solicitação de orçamento.",
  },
  {
    id: "eletricista",
    label: "LS Climatização",
    url: "https://ls-climatizacao.vercel.app/",
    src: "/projetos-k7/ls-climatizacao.png",
    description: "Site de serviço local para climatização e elétrica, com oferta clara, confiança e contato rápido pelo WhatsApp.",
  },
  {
    id: "odontologia",
    label: "Laila Araújo Clinic",
    url: "https://lailaaraujoclinic.vercel.app/",
    src: "/projetos-k7/laila-araujo-clinic.png",
    description: "Landing page odontológica com foco em posicionamento profissional, tratamentos e geração de novos contatos.",
  },
];

const benefits = [
  ["↗", "Estrutura pensada para converter", "Sua página é organizada para conduzir o visitante até a ação, com menos ruído e mais clareza."],
  ["◉", "Jornada simples e intuitiva", "Cada seção tem um propósito claro para o usuário entender, confiar e avançar sem se perder."],
  ["✦", "Técnicas de texto persuasivas", "Copy estratégica para explicar sua oferta rápido, gerar interesse e estimular o próximo passo."],
  ["◎", "Personalização total (de verdade)", "Visual, tom e argumentos construídos para refletir seu negócio, seu público e seu posicionamento."],
  ["✧", "Credibilidade instantânea", "Hierarquia visual, consistência e prova para elevar a percepção de valor antes da primeira conversa."],
  ["△", "Apoio contínuo", "Ajustes e evolução com orientação próxima, de acordo com o escopo aprovado para o projeto."],
];

const testimonials = [
  { name: "Gabriel Rodrigues Da Luz", role: "Cliente K7 Sites • Google", result: "Sugestões aplicadas ao negócio", text: "Excelente trabalho, atendeu a demanda e me deu sugestões que foram eficazes no meu negócio." },
  { name: "Alexandre Do Nascimento Ribeiro Pizatto", role: "Cliente K7 Sites • Google", result: "Expectativas superadas", text: "Se pudesse dava nota 1000 pra vocês! Superaram minhas expectativas em todos sentidos, custei pra achar mas finalmente achei uma empresa séria!! Sucesso sempre." },
  { name: "Kaique Júnior Macedo", role: "Cliente K7 Sites • Google", result: "Site da lavanderia desenvolvido", text: "Excelente experiência, criaram o site da minha lavanderia. Ótimos profissionais, só tenho a agradecer, Deus abençoe vocês." },
  { name: "Kaio Santos", role: "Cliente K7 Sites • Google", result: "Experiência acima da expectativa", text: "Excelente experiência com a K7 Sites! Desde o primeiro contato, demonstraram profissionalismo, atenção aos detalhes e muita dedicação para entregar um resultado de qualidade. O atendimento foi muito bom e o trabalho superou minhas expectativas. Dá para perceber o cuidado e o compromisso em cada etapa. Recomendo muito para quem procura um serviço profissional, confiável e de qualidade!" },
  { name: "Beatriz Araújo", role: "Cliente K7 Sites • Google", result: "Mais prospecção de clientes", text: "Atendimento excelente. Criou minha página voltada para odontologia e hoje prospecto ainda mais clientes através dela. Obrigada." },
  { name: "Breno Miguel", role: "Cliente K7 Sites • Google", result: "Expectativas superadas", text: "Superou as expectativas, muito bom o trabalho e muita dedicação, sucesso." },
  { name: "Daniele Pedrosa", role: "Cliente K7 Sites • Google", result: "Projeto entregue como solicitado", text: "Amei o site que criou pra mim! Exatamente da forma que solicitei. Excelente profissional!" },
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

function Cta({ children, location, onOpen, light = false }: { children: ReactNode; location: string; onOpen: () => void; light?: boolean }) {
  return <button type="button" className={"lp2-btn " + (light ? "lp2-btn-light" : "lp2-btn-primary")} onClick={() => {
    trackEvent("click_cta_service", { page_path: window.location.pathname, button_location: location, link_text: String(children) });
    onOpen();
  }}>{children}<Arrow /></button>;
}

function SiteMockup({ project }: { project: typeof projects[number] }) {
  return <article className="lp2-site-card">
    <a className="lp2-project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={"Ver projeto " + project.label}>
      <div className="lp2-browser-bar"><div><i/><i/><i/></div><span>{project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span></div>
      <div className="lp2-real-project-shot">
        <Image src={project.src} alt={"Prévia do projeto " + project.label} fill sizes="(max-width: 720px) 86vw, (max-width: 1200px) 52vw, 520px" />
      </div>
      <footer className="lp2-project-meta">
        <div><strong>{project.label}</strong><p>{project.description}</p></div>
        <span>Ver projeto ↗</span>
      </footer>
    </a>
  </article>;
}

function ProjectsSlider() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (index: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const cards = Array.from(viewport.querySelectorAll<HTMLElement>(".lp2-site-card"));
    if (!cards.length) return;
    const next = (index + cards.length) % cards.length;
    viewport.scrollTo({ left: cards[next].offsetLeft - cards[0].offsetLeft, behavior: "smooth" });
    setActive(next);
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => goTo(active + 1), 4300);
    return () => window.clearInterval(id);
  }, [active, paused]);

  const syncActive = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const cards = Array.from(viewport.querySelectorAll<HTMLElement>(".lp2-site-card"));
    if (!cards.length) return;
    const offsets = cards.map(card => Math.abs((card.offsetLeft - cards[0].offsetLeft) - viewport.scrollLeft));
    setActive(offsets.indexOf(Math.min(...offsets)));
  };

  return <div className="lp2-slider-shell lp2-reveal" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="lp2-slider-top"><div><button type="button" onClick={() => goTo(active - 1)} aria-label="Projeto anterior">←</button><button type="button" onClick={() => goTo(active + 1)} aria-label="Próximo projeto">→</button></div><span>Arraste para explorar</span></div>
    <div className="lp2-portfolio-viewport" ref={viewportRef} onScroll={syncActive}><div className="lp2-portfolio-track">{projects.map(project => <SiteMockup project={project} key={project.id}/>)}</div></div>
    <div className="lp2-slider-dots">{projects.map((project,index) => <button type="button" className={index === active ? "is-active" : ""} onClick={() => goTo(index)} aria-label={"Ir para " + project.label} key={project.id}/>)}</div>
  </div>;
}

function TestimonialsSlider() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (index: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const cards = Array.from(viewport.querySelectorAll<HTMLElement>(".lp2-testimonial"));
    if (!cards.length) return;
    const next = (index + cards.length) % cards.length;
    viewport.scrollTo({ left: cards[next].offsetLeft - cards[0].offsetLeft, behavior: "smooth" });
    setActive(next);
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => goTo(active + 1), 4800);
    return () => window.clearInterval(id);
  }, [active, paused]);

  const syncActive = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const cards = Array.from(viewport.querySelectorAll<HTMLElement>(".lp2-testimonial"));
    if (!cards.length) return;
    const offsets = cards.map(card => Math.abs((card.offsetLeft - cards[0].offsetLeft) - viewport.scrollLeft));
    setActive(offsets.indexOf(Math.min(...offsets)));
  };

  return <div className="lp2-review-shell lp2-reveal" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="lp2-review-viewport" ref={viewportRef} onScroll={syncActive}><div className="lp2-review-track">
      {testimonials.map(item => <article className="lp2-testimonial" key={item.name}><div className="lp2-stars" aria-label="5 de 5 estrelas">★★★★★</div><p>“{item.text}”</p><footer><div><strong>{item.name}</strong><span>{item.role}</span></div><b>{item.result}</b></footer></article>)}
    </div></div>
    <div className="lp2-review-controls"><div>{testimonials.map((item,index) => <button type="button" className={index === active ? "is-active" : ""} onClick={() => goTo(index)} aria-label={"Avaliação " + (index + 1)} key={item.name}/>)}</div><div><button type="button" onClick={() => goTo(active - 1)} aria-label="Avaliação anterior">←</button><button type="button" onClick={() => goTo(active + 1)} aria-label="Próxima avaliação">→</button></div></div>
    <a className="lp2-google-reviews" href={reviewsUrl} target="_blank" rel="noreferrer">Ver avaliações no Google ↗</a>
  </div>;
}

export default function LandingPages() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const contactDialogRef = useRef<HTMLDialogElement>(null);
  const sentScroll = useRef({ half: false, almost: false });
  const openContactDialog = () => {
    setMenuOpen(false);
    contactDialogRef.current?.showModal();
  };

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
    <dialog ref={contactDialogRef} className="lp2-contact-dialog" aria-label="Solicitar orçamento">
      <div className="lp2-contact-dialog-inner">
        <button type="button" className="lp2-contact-dialog-close" aria-label="Fechar formulário" onClick={() => contactDialogRef.current?.close()}>×</button>
        <HeroLeadForm placement="lp-modal" />
      </div>
    </dialog>
    <div className="lp2-progress" aria-hidden="true" />
    <header className="lp2-header">
      <div className="lp2-brand" aria-label="K7 Sites"><Image src="/k7-preloader-logo.png" alt="K7 Sites" width={84} height={87} priority/></div>
      <nav className={menuOpen ? "lp2-nav is-open" : "lp2-nav"} aria-label="Navegação principal">
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>Projetos</a>
        <a href="#beneficios" onClick={() => setMenuOpen(false)}>Benefícios</a>
        <a href="#processo" onClick={() => setMenuOpen(false)}>Processo</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
      </nav>
      <Cta location="header" onOpen={openContactDialog}>Quero minha página</Cta>
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
          <div className="lp2-hero-actions"><Cta location="hero" onOpen={openContactDialog}>Quero vender melhor no digital</Cta><a className="lp2-text-link" href="#portfolio">Ver projetos <Arrow/></a></div>
          <div className="lp2-proof"><span><b>R$ 399</b> a partir de</span><span><b>Mobile first</b> em qualquer tela</span><span><b>Contato direto</b> pelo WhatsApp</span></div>
        </div>
        <div className="lp2-hero-art lp2-reveal">
          <div className="lp2-art-aura" aria-hidden="true"/>
          <Image src="/hero-k7-sites.png" alt="Notebook exibindo uma landing page profissional desenvolvida para apresentação digital" width={1600} height={1200} priority sizes="(max-width: 900px) 96vw, 780px"/>
        </div>
      </div>
    </section>

    <section className="lp2-marquee" aria-label="Diferenciais">
      {[0,1,2].map(row => <div className={"lp2-marquee-row row-" + row} key={row}><div className="lp2-marquee-track">{[...marquee,...marquee].map((item,index) => <span className={(index + row) % 2 ? "coral" : "blue"} key={item+index}>{item}</span>)}</div></div>)}
    </section>

    <section className="lp2-section lp2-light" id="portfolio">
      <div className="lp2-wrap"><div className="lp2-heading lp2-reveal"><p className="lp2-eyebrow dark">LANDING PAGE PODE AUMENTAR SUAS OPORTUNIDADES</p><h2>Alguns projetos que já <em>desenvolvemos.</em></h2><p>Mockups de diferentes segmentos para mostrar como estratégia, copy e design podem assumir identidades próprias sem perder clareza comercial.</p></div></div>
      <ProjectsSlider/>
    </section>

    <section className="lp2-section lp2-dark" id="beneficios">
      <div className="lp2-glow lp2-glow-b" aria-hidden="true"/>
      <div className="lp2-wrap">
        <div className="lp2-heading centered lp2-reveal"><p className="lp2-eyebrow">AUMENTE SUAS OPORTUNIDADES</p><h2>Garantimos tudo o que sua página <em>merece.</em></h2></div>
        <div className="lp2-benefit-grid">{benefits.map(([icon,title,text],index) => <article className="lp2-benefit-card lp2-reveal" style={{ transitionDelay: `${index * 55}ms` }} key={title}><span className="lp2-icon">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="lp2-center"><Cta location="benefits" onOpen={openContactDialog}>Começar o desenvolvimento da minha página</Cta></div>
      </div>
    </section>

    <section className="lp2-section lp2-light lp2-difference">
      <div className="lp2-wrap lp2-two">
        <div className="lp2-heading lp2-reveal"><p className="lp2-eyebrow dark">AUMENTE SUAS OPORTUNIDADES</p><h2>Seu projeto é único. <em>Sua página também deveria ser.</em></h2><p>Quando o mercado está cheio de ofertas parecidas, uma página genérica não resolve. Você precisa de uma experiência que deixe claro por que vale a pena escolher você.</p><Cta location="difference" onOpen={openContactDialog}>Quero elevar a qualidade do meu projeto</Cta></div>
        <article className="lp2-mobile-card lp2-reveal"><span className="lp2-icon">✧</span><div><small>EXPERIÊNCIA NO MOBILE</small><h3>Seu cliente chega pelo celular. Sua página precisa estar pronta.</h3><p>Leitura confortável, CTA visível e navegação direta para manter a experiência fluida até o contato.</p><strong>Mobile first</strong><span>Layout pensado para funcionar com clareza em telas menores sem perder a hierarquia da oferta.</span></div><div className="lp2-phone" aria-hidden="true"><div className="lp2-phone-notch"/><Image src="/project-stream/saude.jpg" alt="" fill sizes="180px"/></div></article>
      </div>
    </section>

    <section className="lp2-section lp2-dark" id="processo">
      <div className="lp2-wrap">
        <div className="lp2-heading centered lp2-reveal"><p className="lp2-eyebrow">PROCESSO CLARO, SEM ENROLAÇÃO</p><h2>Do briefing à publicação em <em>quatro etapas.</em></h2></div>
        <div className="lp2-process"><div className="lp2-process-line" aria-hidden="true"/>{[["01","Conversa e briefing","Entendemos oferta, público, objetivo e referências."],["02","Estratégia e copy","Organizamos mensagem, argumentos e sequência de conversão."],["03","Design e desenvolvimento","Transformamos a estratégia em uma página rápida, responsiva e profissional."],["04","Publicação e ajustes","Revisamos, publicamos e aplicamos os ajustes previstos no escopo."]].map(([n,t,d],i) => <article className="lp2-step lp2-reveal" style={{ transitionDelay: `${i * 70}ms` }} key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </div>
    </section>

    <section className="lp2-section lp2-light">
      <div className="lp2-wrap">
        <div className="lp2-heading centered lp2-reveal"><p className="lp2-eyebrow dark">FOCO EM CONVERSÃO</p><h2>Não é só ter uma página. É ter uma página com <em>direção.</em></h2></div>
        <div className="lp2-compare"><article className="lp2-compare-card before lp2-reveal"><small>SEM ESTRATÉGIA</small><h3>O visitante chega e precisa descobrir sozinho.</h3><ul><li>Mensagem dispersa</li><li>Oferta pouco clara</li><li>CTA escondido</li><li>Visual genérico</li></ul></article><article className="lp2-compare-card after lp2-reveal"><small>COM LANDING PAGE K7</small><h3>Cada seção ajuda a avançar uma decisão.</h3><ul><li>Proposta de valor clara</li><li>Benefícios priorizados</li><li>Próximo passo visível</li><li>Experiência alinhada à marca</li></ul></article></div>
      </div>
    </section>

    <section className="lp2-section lp2-proof-section">
      <div className="lp2-wrap"><div className="lp2-heading centered lp2-reveal"><p className="lp2-eyebrow dark">PROVA SOCIAL REAL</p><h2>Quem contrata precisa sentir que fez <em>a escolha certa.</em></h2></div><TestimonialsSlider/></div>
    </section>

    <section className="lp2-section lp2-light" id="faq">
      <div className="lp2-wrap lp2-faq-layout">
        <div className="lp2-heading lp2-reveal"><p className="lp2-eyebrow dark">SEM LETRAS MIÚDAS</p><h2>Dúvidas antes de começar? <em>Vamos direto ao ponto.</em></h2><p>As respostas que normalmente ajudam a decidir com mais segurança.</p></div>
        <div className="lp2-faq-list">{faqs.map(([q,a],index) => <article className={openFaq === index ? "lp2-faq is-open" : "lp2-faq"} key={q}><button type="button" onClick={() => { const next = openFaq === index ? null : index; setOpenFaq(next); if (next !== null) trackEvent("faq_open", { page_path: window.location.pathname, question: q }); }} aria-expanded={openFaq === index}><span>{q}</span><i>{openFaq === index ? "−" : "+"}</i></button><div><p>{a}</p></div></article>)}</div>
      </div>
    </section>

    <section className="lp2-final">
      <div className="lp2-marquee lp2-marquee-bg" aria-hidden="true">{[0,1].map(row => <div className={"lp2-marquee-row row-"+row} key={row}><div className="lp2-marquee-track">{[...marquee,...marquee].map((item,index) => <span className={(index+row)%2?"coral":"blue"} key={item+index}>{item}</span>)}</div></div>)}</div>
      <div className="lp2-wrap"><div className="lp2-final-card lp2-reveal"><p className="lp2-eyebrow">PRÓXIMO PASSO</p><h2>Chegou o momento de colocar sua marca em um <em>patamar acima.</em></h2><p>DESTAQUE SEU PRODUTO OU SERVIÇO NO DIGITAL.</p><Cta location="final" onOpen={openContactDialog} light>Quero falar sobre meu projeto</Cta></div></div>
    </section>

    <section className="lp2-form-section" id="formulario">
      <div className="lp2-wrap lp2-form-layout">
        <div className="lp2-heading lp2-reveal"><p className="lp2-eyebrow dark">ORÇAMENTO PERSONALIZADO</p><h2>Vamos transformar sua ideia em uma página que <em>vende melhor.</em></h2><p>O formulário continua usando exatamente a integração atual com o K7 Gestão, preservando origem, serviço, validações e rastreamento da campanha.</p></div>
        <div className="lp2-form-shell lp2-reveal"><HeroLeadForm placement="lp-contact" /></div>
      </div>
    </section>



    <button type="button" className="lp2-mobile-cta" onClick={() => {
      trackEvent("click_cta_service", { page_path: window.location.pathname, button_location: "mobile_fixed", link_text: "Falar sobre meu projeto" });
      openContactDialog();
    }}>Falar sobre meu projeto <Arrow/></button>
  </main>;
}
