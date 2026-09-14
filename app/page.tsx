"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ImageStream } from "@/components/ui/image-stream";
import { HomeProjectsSection } from "@/components/ui/home-projects-gallery";
import { SitePreloader } from "@/components/site-preloader";
import { trackEvent } from "@/lib/analytics";

const whatsappLink = "https://wa.me/5511949214071?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20K7%20Sites%20e%20gostaria%20de%20pedir%20um%20or%C3%A7amento.";
const googleReviewsLink = "https://share.google/pDIhvdTpTxOyWEIOe";
const heroTitleWords = [
  { text: "Sites" }, { text: "e" }, { text: "Landing" }, { text: "Pages" },
  { text: "profissionais" }, { text: "a" }, { text: "partir" }, { text: "de" },
  { text: "R$399", accent: true },
];

const technologies = [
  { name: "Google", icon: "/technologies/google.svg" },
  { name: "Vercel", icon: "/technologies/vercel.svg" },
  { name: "Figma", icon: "/technologies/figma.svg" },
  { name: "JavaScript", icon: "/technologies/javascript.svg" },
  { name: "TypeScript", icon: "/technologies/typescript.svg" },
  { name: "CSS", icon: "/technologies/css.svg" },
  { name: "Node.js", icon: "/technologies/nodejs.svg" },
  { name: "Visual Studio Code", icon: "/technologies/visual-studio-code.svg" },
  { name: "Next.js", icon: "/technologies/nextjs.svg" },
  { name: "PHP", icon: "/technologies/php.svg" },
];

const services = [
  { number: "01", title: "Landing pages", text: "Páginas focadas em apresentar uma oferta ou serviço e conduzir o visitante a uma ação específica, como solicitar um orçamento ou entrar em contato.", tag: "Campanhas e ofertas" },
  { number: "02", title: "Sites institucionais", text: "Sites completos para apresentar a empresa, seus serviços, diferenciais, projetos e canais de contato com mais credibilidade.", tag: "Presença e confiança" },
  { number: "03", title: "Páginas de vendas", text: "Páginas estruturadas para explicar uma oferta, responder dúvidas e facilitar a decisão do visitante.", tag: "Produtos e serviços" },
  { number: "04", title: "Sites para cursos", text: "Estrutura para divulgar cursos, organizar conteúdos, integrar checkout e deixar a jornada de compra mais simples.", tag: "Infoprodutos" },
  { number: "05", title: "Redesign estratégico", text: "Atualização visual e estrutural de páginas antigas para melhorar clareza, percepção de valor e uso no celular.", tag: "Evolução de marca" },
  { number: "06", title: "Suporte e evolução", text: "Ajustes, novas seções e melhorias contínuas para manter o projeto alinhado às próximas necessidades do negócio.", tag: "Crescimento contínuo" },
];

const deliveries = [
  { icon: "⚡︎", title: "Carregamento rápido", text: "Desenvolvimento cuidadoso para oferecer uma navegação ágil e uma boa experiência em diferentes dispositivos." },
  { icon: "▣", title: "Design personalizado e responsivo", text: "Uma apresentação alinhada ao seu negócio, adaptada para computador, tablet e celular." },
  { icon: "↗", title: "Caminhos claros para contato", text: "Conteúdo e chamadas para ação organizados para facilitar pedidos de orçamento e novas conversas." },
  { icon: "⌕", title: "Estrutura preparada para SEO", text: "Boas práticas técnicas e conteúdo indexável para ajudar o Google a compreender sua página." },
  { icon: "◉", title: "Contato direto pelo WhatsApp", text: "Botões e formulários aproximam o visitante da sua empresa e tornam o atendimento mais simples." },
  { icon: "⬡", title: "Orientação até a publicação", text: "A K7 acompanha os ajustes e orienta as etapas necessárias para colocar o projeto no ar." },
];

const nicheProjects = [
  { src: "/project-stream/saude.jpg", label: "Saúde" },
  { src: "/project-stream/estetica.jpg", label: "Estética" },
  { src: "/project-stream/advocacia.jpg", label: "Advocacia" },
  { src: "/project-stream/higienizacao.jpg", label: "Higienização" },
  { src: "/project-stream/barbearia.png", label: "Barbearia" },
  { src: "/project-stream/cursos.jpg", label: "Cursos" },
  { src: "/project-stream/gastronomia.jpg", label: "Gastronomia" },
];

const testimonials = [
  {
    name: "Gabriel Rodrigues Da Luz",
    details: "0 avaliação • 0 foto",
    date: "Há 7 minutos",
    text: "Excelente trabalho, atendeu a demanda e me deu sugestões que foram eficazes no meu negócio",
  },
  {
    name: "Alexandre Do Nascimento Ribeiro Pizatto",
    details: "2 avaliações • 0 foto",
    date: "Há 20 minutos",
    text: "Se pudesse dava nota 1000 pra vocês! superaram minhas expectativas em todos sentidos, custei pra achar mas finalmente achei uma empresa seria!! Sucesso sempre.",
  },
  {
    name: "Kaique Júnior macedo",
    details: "Local Guide • 2 avaliações • 40 fotos",
    date: "Há 33 minutos",
    text: "Excelente experiência, criaram o site da minha lavanderia . Ótimos profissionais, só tenho a agradecer, Deus abençoe vocês",
  },
  {
    name: "Kaio Santos",
    details: "7 avaliações",
    date: "Uma hora atrás",
    text: "Excelente experiência com a K7 Sites! Desde o primeiro contato, demonstraram profissionalismo, atenção aos detalhes e muita dedicação para entregar um resultado de qualidade. O atendimento foi muito bom e o trabalho superou minhas expectativas. Dá para perceber o cuidado e o compromisso em cada etapa. Recomendo muito para quem procura um serviço profissional, confiável e de qualidade!",
  },
  {
    name: "Beatriz Araújo",
    details: "3 avaliações • 0 foto",
    date: "Há 6 dias",
    text: "Atendimento excelente. Criou minha página voltada para odontologia e hoje prospecto ainda mais clientes através dela 😍🚀👏 Obrigada.",
  },
  {
    name: "Breno Miguel",
    details: "3 avaliações • 0 foto",
    date: "Há 6 dias",
    text: "Superou as expectativas, muito bom o trabalho e muita dedicação, sucesso. 🙌",
  },
  {
    name: "Daniele Pedrosa",
    details: "Local Guide • 9 avaliações • 27 fotos",
    date: "Há 6 dias",
    text: "Amei o site que criou pra mim! Exatamente da forma que solicitei. Excelente profissional!",
  },
];

const faqs = [
  ["Em quanto tempo meu site fica pronto?", "O prazo é definido conforme o escopo e começa após a aprovação, o pagamento inicial e o envio de todos os materiais. O projeto pode ficar pronto antes do prazo previsto."],
  ["A página funciona bem no celular?", "Sim. O layout é planejado para desktop, tablet e celular, com atenção especial à leitura, aos botões e aos formulários."],
  ["Eu preciso enviar os textos e as imagens?", "Você pode enviar os materiais disponíveis. A K7 organiza o conteúdo e orienta sobre o que estiver faltando. Produções específicas podem ser incluídas no orçamento."],
  ["Domínio e hospedagem estão incluídos?", "Esses serviços são definidos no orçamento. Se ainda não tiver domínio ou hospedagem, você recebe orientação para escolher e configurar."],
  ["Posso pedir alterações?", "Sim. A quantidade de rodadas de ajustes é registrada na proposta para que o processo seja organizado e previsível para os dois lados."],
  ["O pagamento é feito como?", "A condição padrão é 50% antes do início do projeto e 50% na conclusão, antes da publicação definitiva ou liberação dos acessos finais."],
  ["Depois da entrega consigo editar?", "Isso depende da tecnologia escolhida. Em projetos com painel de gerenciamento, você recebe orientação básica para realizar atualizações simples."],
];

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14M14 7l5 5-5 5"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

function TestimonialsSlider() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageCount, setPageCount] = useState(Math.max(1, testimonials.length - 2));

  const getCards = () => Array.from(viewportRef.current?.querySelectorAll<HTMLElement>(".testimonial-card") ?? []);

  const goTo = (index: number) => {
    const viewport = viewportRef.current;
    const cards = getCards();
    if (!viewport || !cards.length) return;

    const nextIndex = Math.max(0, Math.min(index, pageCount - 1));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    viewport.scrollTo({ left: cards[nextIndex].offsetLeft - cards[0].offsetLeft, behavior: reducedMotion ? "auto" : "smooth" });
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateLayout = () => {
      const cards = getCards();
      if (!cards.length) return;
      const visibleCards = Math.max(1, Math.round(viewport.clientWidth / cards[0].offsetWidth));
      const nextPageCount = Math.max(1, testimonials.length - visibleCards + 1);
      setPageCount(nextPageCount);
      setActiveIndex((current) => Math.min(current, nextPageCount - 1));
    };

    const initialFrame = requestAnimationFrame(updateLayout);
    const observer = new ResizeObserver(updateLayout);
    observer.observe(viewport);

    return () => {
      cancelAnimationFrame(initialFrame);
      observer.disconnect();
    };
  }, []);

  const handleScroll = () => {
    const viewport = viewportRef.current;
    const cards = getCards();
    if (!viewport || cards.length < 2) return;
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    setActiveIndex(Math.min(pageCount - 1, Math.max(0, Math.round(viewport.scrollLeft / step))));
  };

  return (
    <div className="testimonial-slider reveal" role="region" aria-roledescription="carrossel" aria-label="Avaliações de clientes da K7 Sites">
      <div className="testimonial-slider-topbar">
        <p aria-live="polite">Exibindo grupo {activeIndex + 1} de {pageCount}</p>
        <div className="testimonial-arrows">
          <button type="button" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Ver avaliações anteriores"><Arrow /></button>
          <button type="button" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === pageCount - 1} aria-label="Ver próximas avaliações"><Arrow /></button>
        </div>
      </div>
      <div className="testimonial-viewport" ref={viewportRef} onScroll={handleScroll}>
        <div className="testimonial-track">
          {testimonials.map((testimonial, index) => <article className="testimonial-card" key={testimonial.name} aria-label={`Avaliação ${index + 1} de ${testimonials.length}`}>
            <div className="testimonial-rating"><span aria-label="5 de 5 estrelas">★★★★★</span><div className="testimonial-google-score"><Image src="/technologies/google.svg" alt="Google" width={24} height={24} /><small>5.0</small></div></div>
            <blockquote><p>{testimonial.text}</p></blockquote>
            <footer><div><a href={googleReviewsLink} target="_blank" rel="noopener noreferrer" aria-label={`Ver avaliações da K7 Sites no Google — avaliação de ${testimonial.name}`}>{testimonial.name} <Arrow diagonal /></a><span>{testimonial.details}</span></div><small>{testimonial.date}</small></footer>
          </article>)}
        </div>
      </div>
      <div className="testimonial-dots" aria-label="Escolher grupo de avaliações">
        {Array.from({ length: pageCount }).map((_, index) => <button type="button" key={index} className={index === activeIndex ? "is-active" : ""} onClick={() => goTo(index)} aria-label={`Ir para o grupo ${index + 1} de avaliações`} aria-current={index === activeIndex ? "true" : undefined} />)}
      </div>
      <a className="testimonial-google-link" href={googleReviewsLink} target="_blank" rel="noopener noreferrer" aria-label="Ver todas as avaliações da K7 Sites no Google">Ver avaliações no Google <Arrow diagonal /></a>
    </div>
  );
}

const Check = () => <span className="check" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none"><path d="m5 10.2 3.1 3.1L15.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>;

function CounterStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const statRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stat = statRef.current;
    if (!stat) return;

    let animationFrame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplayValue(value);
        return;
      }

      const startedAt = performance.now();
      const duration = 1400;
      const animate = (time: number) => {
        const progress = Math.min((time - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(value * easedProgress));
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    }, { threshold: 0.35 });

    observer.observe(stat);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <article className="stat-item" ref={statRef} aria-label={`${value}${suffix} ${label}`}>
      <strong aria-hidden="true"><span>{displayValue}</span><i>{suffix}</i></strong>
      <p>{label}</p>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);
  const [submittedWhatsappLink, setSubmittedWhatsappLink] = useState(whatsappLink);

  const trackWhatsAppClick = (
    buttonLocation: "hero" | "header" | "portfolio" | "final_cta" | "floating_button",
    linkText: string,
  ) => {
    trackEvent("click_whatsapp", {
      button_location: buttonLocation,
      page_path: window.location.pathname,
      link_text: linkText,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll", max > 0 ? String(window.scrollY / max) : "0");
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => { observer.disconnect(); window.removeEventListener("scroll", updateProgress); };
  }, []);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const field = (name: string) => String(formData.get(name) ?? "");
    const message = `Olá! Vim pelo site da K7 Sites e gostaria de solicitar um orçamento.

Nome: ${field("nome")}
E-mail: ${field("email")}
Tipo de projeto: ${field("projeto")}
Objetivo: ${field("objetivo")}

Sobre a empresa e o projeto:
${field("mensagem")}`;
    const formWhatsappLink = `https://wa.me/5511949214071?text=${encodeURIComponent(message)}`;

    setSubmittedWhatsappLink(formWhatsappLink);
    setSent(true);
    trackWhatsAppClick("final_cta", "Enviar pelo WhatsApp");
    window.open(formWhatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SitePreloader />
      <main>
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <div className="ticker" aria-label="Diferenciais K7 Sites"><div className="ticker-track">
        {Array.from({ length: 2 }).map((_, group) => <div className="ticker-group" key={group} aria-hidden={group === 1}><span>DESIGN ESTRATÉGICO</span><i /><span>EXPERIÊNCIA RESPONSIVA</span><i /><span>COPY QUE CONDUZ</span><i /><span>PROJETOS SOB MEDIDA</span><i /></div>)}
      </div></div>

      <header className="site-header">
        <a className="brand header-brand" href="#inicio" aria-label="K7 Sites — início"><Image src="/k7-preloader-logo.png" alt="K7 Sites" width={84} height={87} priority /></a>
        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Navegação principal">
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a><a href="#processo" onClick={() => setMenuOpen(false)}>Processo</a><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a><a href="#faq" onClick={() => setMenuOpen(false)}>Dúvidas</a><a className="nav-mobile-cta" href="#orcamento" onClick={() => setMenuOpen(false)}>Solicitar um orçamento</a>
        </nav>
        <a className="header-cta" href="#orcamento">Solicitar orçamento <Arrow /></a>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar com a K7 Sites pelo WhatsApp" onClick={() => trackWhatsAppClick("floating_button", "Falar pelo WhatsApp")}><Image src="/whatsapp.svg" alt="" width={38} height={38} aria-hidden="true" /></a>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" /><div className="hero-glow" aria-hidden="true" />
        <div className="container hero-layout" id="conteudo">
          <div className="hero-copy">
            <p className="eyebrow enter"><span /> PRESENÇA DIGITAL PROFISSIONAL</p>
            <h1 className="enter delay-1" aria-label="Sites profissionais para transformar sua presença digital em novas oportunidades">
              {heroTitleWords.map((word, wordIndex) => {
                const characterOffset = heroTitleWords.slice(0, wordIndex).reduce((total, item) => total + item.text.length, 0);
                return <span className={`hero-title-word${word.accent ? " is-accent" : ""}${wordIndex < heroTitleWords.length - 1 ? " has-space" : ""}`} key={word.text}>{Array.from(word.text).map((character, characterIndex) => <span className="hero-title-character" style={{ animationDelay: `${280 + (characterOffset + characterIndex) * 34}ms` }} key={`${word.text}-${characterIndex}`}>{character}</span>)}</span>;
              })}
            </h1>
            <p className="hero-lead enter delay-2">A K7 Sites cria sites institucionais e landing pages personalizados para empresas e profissionais que desejam transmitir confiança, apresentar seus serviços e facilitar o contato com novos clientes.</p>
            <div className="hero-actions enter delay-3"><a className="button button-primary" href="#orcamento">Solicitar um orçamento <Arrow /></a><a className="button button-ghost" href="#projetos">Conhecer projetos <Arrow diagonal /></a></div>
            <ul className="hero-benefits enter delay-4"><li><Check /> Projeto personalizado</li><li><Check /> Atendimento próximo</li><li><Check /> Orçamento sem compromisso</li></ul>
          </div>
          <div className="hero-art enter delay-2" aria-label="Representação de um site criado pela K7 Sites">
            <div className="orbit orbit-one"><span /></div><div className="orbit orbit-two"><span /></div>
            <div className="floating-note note-top"><b>Google SEO</b><small>estrutura preparada</small></div>
            <div className="browser-card real-browser"><div className="browser-bar"><i /><i /><i /><span>seudominio.com.br</span></div><div className="browser-site"><Image src="/project-stream/barbearia.png" alt="Exemplo de site profissional criado para uma barbearia" fill sizes="(max-width: 860px) 96vw, 520px" priority loading="eager" /></div></div>
            <div className="floating-note note-bottom"><b>100%</b><small>otimizado</small></div><div className="k7-stamp">K7<span>SITES</span></div>
          </div>
        </div>
        <div className="hero-footer container"><span>ROLE PARA DESCOBRIR</span><span className="scroll-line" /><p>Estratégia <i>•</i> Design <i>•</i> Tecnologia</p></div>
      </section>

      <section className="signal-strip" aria-label="Resultados e diferenciais da K7 Sites"><div className="container signal-grid">
        <CounterStat value={200} suffix="+" label="Sites já criados" />
        <CounterStat value={40} suffix="+" label="Nichos atendidos" />
        <CounterStat value={48} suffix="h" label="Entrega ágil" />
        <CounterStat value={100} suffix="%" label="Responsivo e rápido" />
      </div></section>

      <section className="home-performance-art" aria-label="Indicadores de desempenho de uma landing page">
        <div className="container">
          <div className="home-performance-art-scroll">
            <Image
              src="/landing-page-profissional-auto-desenpenho.webp"
              alt="Arte com indicadores de uma landing page: desempenho 98, acessibilidade 96, práticas recomendadas 99, SEO 100 e navegação agêntica 2 de 2."
              width={2048}
              height={682}
              sizes="(max-width: 620px) 900px, (max-width: 1228px) calc(100vw - 48px), 1180px"
            />
          </div>
          <p className="home-performance-art-hint">Deslize para ver todos os indicadores.</p>
        </div>
      </section>

      <section className="niche-showcase" aria-labelledby="niche-showcase-title">
        <div className="container">
          <div className="section-heading centered niche-heading reveal">
            <p className="eyebrow"><span /> IDEIAS QUE GANHAM FORMA</p>
            <h2 id="niche-showcase-title">Um site profissional alinhado ao <em>seu segmento.</em></h2>
            <p>Veja possibilidades de criação de sites para empresas e profissionais de diferentes áreas, sempre com identidade, clareza e experiência responsiva.</p>
          </div>
        </div>
        <div className="niche-stream-shell reveal">
          <ImageStream images={nicheProjects} cards={9} speed={19}>
            <div className="stream-center-mark" aria-hidden="true"><Image src="/k7-logo.png" alt="" width={154} height={108} /></div>
          </ImageStream>
        </div>
        <div className="container">
          <ul className="niche-list" aria-label="Nichos representados">
            {nicheProjects.map((project) => <li key={project.label}>{project.label}</li>)}
          </ul>
          <p className="niche-caption">Projetos demonstrativos criados para representar possibilidades visuais.</p>
        </div>
      </section>

      <section className="section problems" id="diagnostico"><div className="container">
        <div className="section-heading reveal"><p className="eyebrow dark"><span /> BENEFÍCIOS DE UM SITE PROFISSIONAL</p><h2>Uma presença digital preparada para <em>transmitir confiança.</em></h2><p>Design personalizado, conteúdo claro e desenvolvimento cuidadoso para apresentar seus serviços e facilitar novas oportunidades de contato.</p></div>
        <div className="problem-grid">{deliveries.map((item) => <article className="problem-card reveal" key={item.title}><span className="problem-icon" aria-hidden="true">{item.icon}</span><b>{item.title}</b><p>{item.text}</p></article>)}</div>
      </div></section>

      <section className="impact-band"><div className="container impact-layout reveal"><p>UMA BOA PRESENÇA DIGITAL CONECTA</p><div><strong>CLAREZA</strong><span>para explicar</span></div><i>+</i><div><strong>DESIGN</strong><span>para valorizar</span></div><i>+</i><div><strong>ESTRATÉGIA</strong><span>para conduzir</span></div></div></section>

      <section className="section services" id="servicos"><div className="container">
        <div className="section-heading split reveal"><div><p className="eyebrow"><span /> SERVIÇOS DE CRIAÇÃO DE SITES</p><h2>O formato certo para cada <em>objetivo.</em></h2></div><p>Landing pages, sites institucionais e páginas de vendas personalizados para comunicar com clareza e facilitar o contato com seu público.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card reveal" key={service.number}><div className="service-top"><div className="service-icon" aria-hidden="true"><span>🚀</span></div><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><small>{service.tag}</small></article>)}</div>
      </div></section>

      <section className="section process" id="processo"><div className="container">
        <div className="section-heading centered process-intro reveal"><p className="eyebrow"><span /> COMO FUNCIONA</p><h2>Um processo claro, do planejamento à <em>publicação.</em></h2><p>Você acompanha a criação do site e sabe o que acontece em cada etapa, desde o diagnóstico até a entrega.</p><a className="text-link" href="#orcamento">Falar sobre meu projeto <Arrow /></a></div>
        <div className="timeline process-timeline">{[["01", "Diagnóstico", "Entendemos seu objetivo, público, oferta, referências e necessidades técnicas."], ["02", "Estratégia e conteúdo", "Organizamos a jornada da página e definimos a mensagem principal de cada seção."], ["03", "Design e desenvolvimento", "Criamos a identidade visual da página e construímos a experiência responsiva."], ["04", "Revisão e publicação", "Aplicamos os ajustes previstos, validamos a navegação e orientamos sobre a entrega."]].map(([number, title, text]) => <article className="timeline-item reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><i><Check /></i></article>)}</div>
      </div></section>

      <HomeProjectsSection />

      <section className="conversion-block"><div className="container"><div className="conversion-card reveal"><div className="conversion-grid" aria-hidden="true" /><div className="conversion-layout"><div><p className="eyebrow"><span /> APRESENTE MELHOR O SEU NEGÓCIO</p><h2>Seu site deve transmitir a qualidade do que você <em>entrega.</em></h2></div><div><p>Conte o que sua empresa precisa e receba uma orientação sobre o formato de projeto mais adequado.</p><a className="button button-light" href="#orcamento">Falar sobre meu projeto <Arrow /></a></div></div></div></div></section>

      <section className="section about" id="sobre"><div className="container">
        <div className="section-heading centered reveal"><p className="eyebrow"><span /> SOBRE A K7 SITES</p><h2>Estratégia, design e desenvolvimento para <em>apresentar melhor o seu negócio.</em></h2><p>A K7 Sites cria sites e landing pages personalizados para empresas e profissionais que desejam comunicar seus serviços com clareza, confiança e identidade.</p></div>
        <div className="about-layout"><div className="about-art reveal"><div className="metal-k">K<span>7</span></div><div className="about-caption"><b>Design com intenção.</b><span>Construção com cuidado.</span></div></div>
        <div className="about-copy reveal"><p>Cada projeto combina organização de conteúdo, direção visual e desenvolvimento responsivo — sem soluções genéricas que apagam o que torna sua marca única.</p><div className="principles"><div><strong>01</strong><span><b>Clareza antes de efeito</b>Todo elemento precisa ajudar a mensagem.</span></div><div><strong>02</strong><span><b>Visual com personalidade</b>Identidade que combina com seu posicionamento.</span></div><div><strong>03</strong><span><b>Parceria próxima</b>Comunicação simples durante todo o projeto.</span></div></div></div></div>
      </div></section>

      <section className="section specialist" aria-labelledby="specialist-title"><div className="container">
        <div className="section-heading centered reveal"><h2 id="specialist-title">Quem irá cuidar do seu <em>projeto.</em></h2></div>
        <div className="specialist-grid">
          <article className="specialist-main-card reveal">
            <div className="specialist-card-art" aria-hidden="true" />
            <div className="specialist-profile">
              <div className="specialist-avatar"><Image src="/kassio-kennedy/kassio-kennedy-perfil.jpg" alt="Retrato de Kassio Kennedy" fill sizes="128px" quality={90} /></div>
              <div><h3>Kassio Kennedy</h3><p>Engenharia de software, estratégia e design unidos para criar experiências digitais de alto nível.</p></div>
            </div>
            <div className="specialist-technologies">
              <h3>Tecnologias que fazem parte de cada projeto</h3>
              <ul>{technologies.map((technology) => <li key={technology.name} title={technology.name}><Image src={technology.icon} alt="" width={30} height={30} aria-hidden="true" /><span>{technology.name}</span></li>)}</ul>
            </div>
          </article>
          <article className="specialist-photo-card reveal">
            <Image src="/kassio-kennedy/kassio-kennedy-desenvolvimento.jpg" alt="Kassio Kennedy em seu espaço de trabalho com um notebook" fill sizes="(max-width: 860px) 100vw, 390px" quality={90} />
            <div className="specialist-photo-copy"><h3>Desenvolvimento Web</h3><div><span aria-label="5 de 5 estrelas">★★★★★</span><small>+200 projetos</small></div></div>
          </article>
        </div>
        <div className="specialist-intro reveal">
          <p>Sou Kassio Kennedy, formado em <em>Engenharia de Software</em> e atuo no desenvolvimento de soluções digitais completas, unindo conhecimentos de front-end e back-end. Por meio da K7 Sites, ajudo empresas e profissionais a fortalecer sua presença digital com <em>sites rápidos, responsivos e otimizados para o Google</em>, desenvolvidos para transmitir credibilidade e transformar visitas em novas oportunidades de negócio.</p>
          <p>Cada projeto é planejado com atenção ao <em>desempenho</em>, à experiência do usuário e aos objetivos reais de cada empresa.</p>
        </div>
      </div></section>

      <section className="section proof" id="depoimentos"><div className="container">
        <div className="section-heading centered reveal"><p className="eyebrow dark"><span /> AVALIAÇÕES NO GOOGLE</p><h2>A confiança cresce quando clientes reais <em>contam a experiência.</em></h2><p>Veja o que clientes da K7 Sites publicaram sobre seus projetos no Google.</p></div>
        <TestimonialsSlider />
      </div></section>

      <section className="section pricing" id="investimento"><div className="pricing-rockets" aria-hidden="true">{Array.from({ length: 12 }).map((_, index) => <span key={index}>🚀</span>)}</div><div className="container">
        <div className="section-heading centered reveal"><p className="eyebrow"><span /> FORMATOS DE PROJETO</p><h2>Escolha a solução adequada para <em>o seu objetivo.</em></h2><p>Compare landing page, site institucional e projeto sob medida antes de solicitar seu orçamento.</p></div>
        <div className="pricing-grid">{[
          { name: "Landing page", description: "Para divulgar uma oferta e gerar contatos", price: "R$ 399,00", detail: "a partir de", features: ["Página completa e estratégica", "Design responsivo", "Botões para WhatsApp", "Google SEO", "Copy organizada", "Entrega ágil"] },
          { name: "Site institucional", description: "Para apresentar sua empresa com autoridade", price: "R$ 699,00", detail: "a partir de", features: ["Home e páginas internas", "Páginas de serviços", "Design profissional", "Google SEO", "WhatsApp e formulário", "Orientação após a entrega"] },
          { name: "Projeto sob medida", description: "Para necessidades, integrações e estruturas especiais", price: "Sob avaliação", detail: "orçamento após análise", features: ["Escopo personalizado", "Funcionalidades específicas", "Integrações especiais", "Planejamento por etapas", "Prazo definido em proposta", "Acompanhamento próximo"] },
        ].map((plan, index) => <article className={index === 1 ? "price-card featured reveal" : "price-card reveal"} key={plan.name}>{index === 1 && <span className="recommended">MAIS POPULAR</span>}<small>0{index + 1}</small><h3>{plan.name}</h3><p>{plan.description}</p><div className="price"><span>{plan.detail}</span>{plan.price}</div><ul>{plan.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul><a className={index === 1 ? "button button-primary" : "button button-ghost"} href="#orcamento">Pedir orçamento <Arrow /></a></article>)}</div>
        <p className="payment-note reveal"><Check /> Condição padrão sugerida: 50% antes do início e 50% na conclusão do projeto.</p>
      </div></section>

      <section className="section faq" id="faq"><div className="container">
        <div className="section-heading centered reveal"><p className="eyebrow dark"><span /> DÚVIDAS FREQUENTES</p><h2>Ainda tem <em>dúvida?</em></h2><p>Veja as respostas mais importantes antes de começar. Se precisar, fale diretamente com a K7 Sites.</p></div>
        <div className="accordion faq-accordion">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "faq-item is-open" : "faq-item"} key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>0{index + 1}</span>{question}<i>{openFaq === index ? "−" : "+"}</i></button><div className="faq-answer"><p>{answer}</p></div></article>)}</div>
      </div></section>

      <section className="section contact" id="orcamento"><div className="contact-glow" aria-hidden="true" /><div className="container">
        <div className="section-heading centered contact-heading reveal"><p className="eyebrow"><span /> SOLICITE UM ORÇAMENTO</p><h2>Vamos criar a solução certa para <em>o seu negócio.</em></h2><p>Conte brevemente o que você precisa. A K7 analisa o projeto e orienta o formato mais adequado para seus objetivos.</p></div>
        <div className="contact-layout">
          <aside className="contact-panel reveal">
            <div className="contact-brand"><Image src="/k7-logo.png" alt="K7 Sites" width={70} height={70} /><div><b>K7 Sites</b><span>Sites que posicionam e convertem</span></div></div>
            <p className="contact-kicker">ORÇAMENTO SIMPLES</p><h3>Seu próximo projeto começa com uma conversa clara.</h3><p>Preencha o briefing rápido. Assim conseguimos entender seu momento antes do primeiro contato.</p>
            <div className="contact-direct"><small>PREFERE FALAR AGORA?</small><a className="whatsapp-direct" href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("final_cta", "WhatsApp: (11) 94921-4071")}>WhatsApp: (11) 94921-4071 <Arrow diagonal /></a></div>
          </aside>
          <div className="form-shell reveal">{!sent ? <form onSubmit={submitForm}>
            <div className="form-pane active"><h3>Conte sobre o seu projeto.</h3><label>Qual é o seu nome?<input name="nome" required placeholder="Digite seu nome" /></label><label>Qual é o melhor e-mail?<input name="email" type="email" required placeholder="voce@empresa.com.br" /></label><label>Qual tipo de projeto você precisa?<select name="projeto" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Landing page</option><option>Site institucional</option><option>Página de vendas</option><option>Site para cursos</option><option>Redesign</option><option>Outro</option></select></label><label>Qual é o principal objetivo?<select name="objetivo" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Gerar contatos</option><option>Vender uma oferta</option><option>Apresentar a empresa</option><option>Lançar um produto</option><option>Atualizar o site atual</option></select></label><label>Me conte um pouco sobre sua empresa e o projeto.<textarea name="mensagem" rows={5} required placeholder="O que você vende, para quem e qual resultado espera?" /></label></div>
            <div className="form-actions"><button className="button button-primary" type="submit">Enviar pelo WhatsApp <Arrow /></button></div>
          </form> : <div className="form-success"><span><Check /></span><small>FORMULÁRIO VALIDADO</small><h3>As informações estão prontas.</h3><p>O WhatsApp foi aberto em uma nova aba. Se ela foi bloqueada, use o link abaixo para continuar.</p><a className="button button-primary" href={submittedWhatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("final_cta", "Continuar no WhatsApp")}>Continuar no WhatsApp <Arrow /></a><button type="button" onClick={() => setSent(false)}>Preencher novamente</button></div>}</div>
        </div>
      </div></section>

      <section className="final-cta"><div className="container"><div className="final-cta-card reveal"><div className="final-orbit" aria-hidden="true" /><div className="final-cta-content"><div className="mini-logo"><Image src="/k7-logo.png" alt="K7 Sites" width={70} height={70} /></div><p>CRIAÇÃO DE SITES PROFISSIONAIS</p><h2>Apresente seu negócio com mais clareza, confiança e facilidade de contato.</h2><a className="button button-light" href="#orcamento">Solicitar um orçamento <Arrow /></a></div></div></div></section>

      <footer className="footer"><div className="container footer-main">
        <div><a className="brand footer-brand" href="#inicio"><Image src="/k7-preloader-logo.png" alt="K7 Sites" width={104} height={108} /></a><p>Sites e landing pages com estratégia, identidade e acabamento profissional.</p></div>
        <div><small>NAVEGAÇÃO</small><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#processo">Processo</a><a href="#sobre">Sobre</a></div>
        <div><small>CONTATO</small><a href="mailto:k7sites@gmail.com">k7sites@gmail.com</a><a href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("final_cta", "WhatsApp: (11) 94921-4071")}>WhatsApp: (11) 94921-4071</a></div>
        <div><small>PRONTO PARA COMEÇAR?</small><a className="footer-cta" href="#orcamento">Pedir orçamento <Arrow diagonal /></a></div>
      </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} K7 Sites. Todos os direitos reservados.</span><span>Design e desenvolvimento: K7 Sites</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
      </main>
    </>
  );
}
