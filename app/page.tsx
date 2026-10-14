"use client";

import Image from "next/image";
import { HeroLeadForm } from "@/components/hero-lead-form";
import { useEffect, useRef, useState } from "react";
import { ImageStream } from "@/components/ui/image-stream";
import { HomeProjectsSection } from "@/components/ui/home-projects-gallery";
import { SitePreloader } from "@/components/site-preloader";
import { trackEvent } from "@/lib/analytics";

const whatsappLink = "https://wa.me/5511949214071?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20K7%20Sites%20e%20gostaria%20de%20pedir%20um%20or%C3%A7amento.";
const googleReviewsLink = "https://share.google/pDIhvdTpTxOyWEIOe";
const heroTitleWords = [
  { text: "Seu" }, { text: "negócio" }, { text: "merece" }, { text: "mais" }, { text: "do" }, { text: "que" }, { text: "estar" }, { text: "na" }, { text: "internet." },
  { text: "Merece" }, { text: "ser" }, { text: "escolhido.", accent: true },
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
  { number: "01", title: "Uma página. Um objetivo. Mais oportunidades.", text: "Páginas estratégicas para apresentar sua oferta, captar contatos e transformar o tráfego das suas campanhas em oportunidades comerciais.", tag: "Landing pages", benefits: ["Comunicação direta e persuasiva", "Estrutura otimizada para captação de leads", "Ideal para campanhas e divulgação de serviços"], cta: "Quero uma landing page", serviceMatch: "Landing" },
  { number: "02", title: "Sua empresa com a credibilidade que merece.", text: "Apresente seus serviços, diferenciais e informações em um site moderno que fortalece sua marca e facilita o contato com potenciais clientes.", tag: "Sites institucionais", benefits: ["Apresentação profissional do negócio", "Experiência adaptada para dispositivos móveis", "Navegação organizada e intuitiva"], cta: "Quero um site profissional", serviceMatch: "Site" },
  { number: "03", title: "Seu negócio evoluiu. Seu site também precisa evoluir.", text: "Modernizamos sites antigos para oferecer uma experiência mais profissional, rápida e adaptada aos dispositivos atuais.", tag: "Redesign de sites", benefits: ["Visual moderno e atualizado", "Melhor organização das informações", "Experiência de navegação aprimorada"], cta: "Quero modernizar meu site", serviceMatch: "Redesign" },
  { number: "04", title: "Páginas de vendas", text: "Páginas estruturadas para explicar uma oferta, responder dúvidas e facilitar a decisão do visitante.", tag: "Produtos e serviços", benefits: [] as string[], cta: "", serviceMatch: "" },
  { number: "05", title: "Sites para cursos", text: "Estrutura para divulgar cursos, organizar conteúdos, integrar checkout e deixar a jornada de compra mais simples.", tag: "Infoprodutos", benefits: [] as string[], cta: "", serviceMatch: "" },
  { number: "06", title: "Suporte e evolução", text: "Ajustes, novas seções e melhorias contínuas para manter o projeto alinhado às próximas necessidades do negócio.", tag: "Crescimento contínuo", benefits: [] as string[], cta: "", serviceMatch: "" },
];

const deliveries = [
  { icon: "◆", title: "Design que transmite confiança", text: "Uma apresentação moderna e profissional, alinhada à identidade da sua empresa." },
  { icon: "↗", title: "Estrutura pensada para conversão", text: "Conteúdo organizado, chamadas estratégicas e caminhos claros para entrar em contato." },
  { icon: "▣", title: "Perfeito em qualquer tela", text: "Uma experiência adaptada para celulares, tablets e computadores." },
  { icon: "◉", title: "Atendimento próximo e personalizado", text: "Entendemos seu negócio para desenvolver uma solução que faça sentido para seus objetivos." },
];

const conversionBenefits = [
  { icon: "⚡", title: "Carregamento rápido", text: "Páginas desenvolvidas para abrir com agilidade e reduzir atritos na navegação." },
  { icon: "▣", title: "Design responsivo", text: "Experiência consistente em celular, tablet e computador." },
  { icon: "↗", title: "Foco em conversão", text: "Mensagem, hierarquia e chamadas organizadas para conduzir o visitante ao próximo passo." },
  { icon: "⌕", title: "SEO técnico", text: "Estrutura indexável para ajudar buscadores a compreenderem melhor o conteúdo." },
  { icon: "◎", title: "Analytics", text: "Medição de acessos e ações importantes para acompanhar o desempenho da página." },
  { icon: "◉", title: "WhatsApp", text: "Caminhos diretos para transformar intenção em conversa com sua empresa." },
  { icon: "◇", title: "Integração com CRM", text: "Leads do formulário seguem para o K7 Gestão com serviço e origem preservados." },
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
  const contactDialogRef = useRef<HTMLDialogElement>(null);
  const openContactDialog = () => { setMenuOpen(false); contactDialogRef.current?.showModal(); };
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const scrollEventsSent = useRef({ scroll50: false, scroll90: false });

  const trackCta = (eventName: "click_cta_hero" | "click_cta_service", location: string, label: string) => {
    trackEvent(eventName, {
      page_path: window.location.pathname,
      button_location: location,
      link_text: label,
    });
  };

  const selectServiceAndScroll = (serviceMatch: string, ctaLabel: string) => {
    const select = document.querySelector<HTMLSelectElement>("#contact-lead-service");
    trackCta("click_cta_service", "services", ctaLabel);
    if (select && serviceMatch) {
      const option = Array.from(select.options).find((item) => item.text.toLowerCase().includes(serviceMatch.toLowerCase()));
      if (option) {
        select.value = option.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
    document.querySelector("#orcamento")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll", String(progress));

      if (progress >= 0.5 && !scrollEventsSent.current.scroll50) {
        scrollEventsSent.current.scroll50 = true;
        trackEvent("scroll_50", { page_path: window.location.pathname });
      }
      if (progress >= 0.9 && !scrollEventsSent.current.scroll90) {
        scrollEventsSent.current.scroll90 = true;
        trackEvent("scroll_90", { page_path: window.location.pathname });
      }
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => { observer.disconnect(); window.removeEventListener("scroll", updateProgress); };
  }, []);


  return (
    <>
      <SitePreloader />
      <dialog ref={contactDialogRef} className="k7-contact-dialog" aria-label="Fale conosco" onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
        <div className="k7-contact-dialog-inner">
          <button type="button" className="k7-contact-dialog-close" aria-label="Fechar formulário" onClick={() => contactDialogRef.current?.close()}>×</button>
          <HeroLeadForm placement="modal" />
        </div>
      </dialog>
      <main>
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <div className="ticker" aria-label="Diferenciais K7 Sites"><div className="ticker-track">
        {Array.from({ length: 2 }).map((_, group) => <div className="ticker-group" key={group} aria-hidden={group === 1}><span>DESIGN ESTRATÉGICO</span><i /><span>EXPERIÊNCIA RESPONSIVA</span><i /><span>COPY QUE CONDUZ</span><i /><span>PROJETOS SOB MEDIDA</span><i /></div>)}
      </div></div>

      <header className="site-header">
        <a className="brand header-brand" href="#inicio" aria-label="K7 Sites — início"><Image src="/k7-preloader-logo.png" alt="K7 Sites" width={84} height={87} priority /></a>
        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Navegação principal">
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a><a href="#processo" onClick={() => setMenuOpen(false)}>Processo</a><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a><a href="#faq" onClick={() => setMenuOpen(false)}>Dúvidas</a><button type="button" className="nav-contact-link" onClick={openContactDialog}>Fale conosco</button><a className="nav-mobile-cta" href="#orcamento" onClick={() => setMenuOpen(false)}>Solicitar um orçamento</a>
        </nav>
        <a className="header-cta" href="#orcamento">Solicitar orçamento <Arrow /></a>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>



      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" /><div className="hero-glow" aria-hidden="true" />
        <div className="container hero-layout" id="conteudo">
          <div className="hero-copy">
            <p className="eyebrow enter"><span /> PRESENÇA DIGITAL PROFISSIONAL</p>
            <h1 className="enter delay-1" aria-label="Seu negócio merece mais do que estar na internet. Merece ser escolhido.">
              {heroTitleWords.map((word, wordIndex) => {
                const characterOffset = heroTitleWords.slice(0, wordIndex).reduce((total, item) => total + item.text.length, 0);
                return <span className={`hero-title-word${word.accent ? " is-accent" : ""}${wordIndex < heroTitleWords.length - 1 ? " has-space" : ""}`} key={word.text}>{Array.from(word.text).map((character, characterIndex) => <span className="hero-title-character" style={{ animationDelay: `${280 + (characterOffset + characterIndex) * 34}ms` }} key={`${word.text}-${characterIndex}`}>{character}</span>)}</span>;
              })}
            </h1>
            <p className="hero-lead enter delay-2">Criamos sites profissionais e landing pages estratégicas para transformar visitantes em oportunidades reais de negócio. Tenha uma presença digital que transmite confiança, valoriza sua marca e facilita o contato de novos clientes.</p>
            <p className="hero-price enter delay-2">Seu site profissional <strong>a partir de R$ 399.</strong></p>
            <div className="hero-actions enter delay-3"><a className="button button-primary" href="#orcamento" onClick={() => trackCta("click_cta_hero", "hero", "Quero criar meu site")}>Quero criar meu site <Arrow /></a><a className="button button-ghost" href="#projetos">Conhecer projetos <Arrow diagonal /></a></div>
            <ul className="hero-benefits enter delay-4"><li><Check /> Design moderno e responsivo</li><li><Check /> Estrutura pensada para conversão</li><li><Check /> Atendimento personalizado</li></ul>
          </div>
          <div className="hero-device-stage enter delay-2" aria-label="Mockup ilustrativo de site responsivo em notebook e celular">
  <div className="hero-device-aura" aria-hidden="true" />
  <div className="hero-laptop"><div className="hero-laptop-display">
    <div className="hero-device-browser"><span/><span/><span/><small>k7sites.com.br</small></div>
    <div className="hero-barber-preview"><Image src="/project-stream/barbearia.png" alt="Prévia do projeto de barbearia da galeria" fill sizes="(max-width: 860px) 95vw, 650px" className="hero-barber-preview-image" /></div>
  </div><div className="hero-laptop-base"><div className="hero-laptop-notch"/></div></div>
  <div className="hero-phone"><div className="hero-phone-camera"/><div className="hero-phone-screen hero-phone-barber-screen"><Image src="/project-stream/barbearia.png" alt="Prévia mobile do projeto de barbearia" fill sizes="180px" className="hero-barber-preview-image" /></div></div>
  <div className="hero-device-caption"><span className="hero-device-caption-dot"/> DESIGN RESPONSIVO <span>·</span> DESKTOP + MOBILE</div>
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
        <div className="section-heading reveal"><p className="eyebrow dark"><span /> QUANDO A PÁGINA NÃO AJUDA</p><h2>Você pode estar pagando para atrair pessoas e perdendo a oportunidade <em>na chegada.</em></h2><p>Antes de entrar em contato, o visitante avalia rapidamente se a empresa parece confiável, profissional e preparada para atender.</p></div>
        <div className="cro-flow cro-flow-negative reveal" aria-label="Fluxo de uma presença digital que perde oportunidades">
          {[
            ["01", "Tráfego", "Google, anúncios e redes sociais levam pessoas até sua empresa."],
            ["02", "Site pouco profissional", "Uma apresentação confusa ou desatualizada enfraquece a percepção de valor."],
            ["03", "Confiança cai", "O visitante hesita, compara alternativas e perde o interesse."],
            ["04", "Oportunidade perdida", "O contato não acontece e o investimento em tráfego rende menos."],
          ].map(([number, title, text], index) => <article className="cro-flow-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>{index < 3 && <i aria-hidden="true">→</i>}</article>)}
        </div>
        <p className="problem-highlight reveal">Seu negócio pode ser excelente. A experiência digital precisa deixar isso claro antes da primeira conversa.</p>
      </div></section>

      <section className="section funnel-solution" aria-labelledby="solution-title"><div className="container">
        <div className="section-heading centered reveal"><p className="eyebrow"><span /> O CAMINHO CERTO</p><h2 id="solution-title">Transforme atenção em uma jornada clara até <em>o contato.</em></h2><p>A K7 organiza mensagem, design e tecnologia para que o visitante entenda o que você oferece, perceba valor e saiba exatamente qual é o próximo passo.</p></div>
        <div className="cro-flow cro-flow-positive reveal" aria-label="Fluxo de conversão com um site profissional da K7 Sites">
          {[
            ["01", "Origem do tráfego", "Google, anúncios e redes sociais."],
            ["02", "Site K7", "Uma experiência rápida, profissional e alinhada ao seu negócio."],
            ["03", "Mensagem clara", "Benefícios, diferenciais e prova organizados para facilitar a decisão."],
            ["04", "CTA", "O visitante encontra um próximo passo simples e objetivo."],
            ["05", "Lead", "Formulário ou WhatsApp transforma interesse em oportunidade comercial."],
          ].map(([number, title, text], index) => <article className="cro-flow-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>{index < 4 && <i aria-hidden="true">→</i>}</article>)}
        </div>
        <div className="section-heading centered reveal benefits-heading"><p className="eyebrow"><span /> ESTRUTURA COMPLETA</p><h2>Uma presença digital preparada para <em>performar melhor.</em></h2></div>
        <div className="conversion-benefits-grid">{conversionBenefits.map((item) => <article className="conversion-benefit-card reveal" key={item.title}><span aria-hidden="true">{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <div className="section-heading centered reveal differentiators-heading"><p className="eyebrow"><span /> DIFERENCIAIS</p><h2>Não criamos apenas páginas bonitas. Criamos experiências pensadas para <em>gerar negócios.</em></h2><p>Um site precisa fazer mais do que impressionar visualmente. Ele precisa comunicar sua proposta, transmitir confiança e mostrar ao visitante qual é o próximo passo.</p></div>
        <div className="problem-grid">{deliveries.map((item) => <article className="problem-card reveal" key={item.title}><span className="problem-icon" aria-hidden="true">{item.icon}</span><b>{item.title}</b><p>{item.text}</p></article>)}</div>
        <a className="button button-primary solution-cta reveal" href="#orcamento" onClick={() => trackCta("click_cta_service", "solution", "Quero transformar visitas em oportunidades")}>Quero transformar visitas em oportunidades <Arrow /></a>
      </div></section>

      <section className="impact-band"><div className="container impact-layout reveal"><p>UMA BOA PRESENÇA DIGITAL CONECTA</p><div><strong>CLAREZA</strong><span>para explicar</span></div><i>+</i><div><strong>DESIGN</strong><span>para valorizar</span></div><i>+</i><div><strong>ESTRATÉGIA</strong><span>para conduzir</span></div></div></section>

      <section className="section services" id="servicos"><div className="container">
        <div className="section-heading split reveal"><div><p className="eyebrow"><span /> NOSSAS SOLUÇÕES</p><h2>O site certo para o momento do <em>seu negócio.</em></h2></div><p>Da primeira presença digital à modernização da sua marca, desenvolvemos soluções para ajudar sua empresa a conquistar espaço e gerar novas oportunidades.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card reveal" key={service.number}><div className="service-top"><div className="service-icon" aria-hidden="true"><span>🚀</span></div><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p>{service.benefits.length > 0 && <ul className="service-benefits">{service.benefits.map((benefit) => <li key={benefit}><Check />{benefit}</li>)}</ul>}<small>{service.tag}</small>{service.cta && <button type="button" className="service-card-cta" onClick={() => selectServiceAndScroll(service.serviceMatch, service.cta)}>{service.cta} <Arrow /></button>}</article>)}</div>
      </div></section>

      <section className="section process" id="processo"><div className="container">
        <div className="section-heading centered process-intro reveal"><p className="eyebrow"><span /> COMO FUNCIONA</p><h2>Seu novo site começa com uma <em>conversa simples.</em></h2><p>Do briefing à publicação, você acompanha um processo claro e recebe orientação em cada etapa.</p><a className="text-link" href="#orcamento" onClick={() => trackCta("click_cta_service", "process", "Quero começar meu projeto")}>Quero começar meu projeto <Arrow /></a></div>
        <div className="timeline process-timeline">{[["01", "Briefing", "Entendemos seu negócio, público, objetivo, referências e o que a página precisa comunicar."], ["02", "Estratégia e desenvolvimento", "Organizamos a mensagem e transformamos o direcionamento aprovado em uma experiência profissional e responsiva."], ["03", "Revisão", "Você analisa o projeto e aplicamos os ajustes previstos no escopo antes da publicação."], ["04", "Publicação", "Após a aprovação final, orientamos a entrada no ar e validamos os principais pontos da experiência."]].map(([number, title, text]) => <article className="timeline-item reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><i><Check /></i></article>)}</div>
      </div></section>

      <HomeProjectsSection />

      <section className="conversion-block"><div className="container"><div className="conversion-card reveal"><div className="conversion-grid" aria-hidden="true" /><div className="conversion-layout"><div><p className="eyebrow"><span /> PRÓXIMO PASSO</p><h2>Seu próximo cliente pode estar procurando exatamente o que você <em>oferece.</em></h2></div><div><p>A pergunta é: quando ele encontrar sua empresa, vai sentir confiança para entrar em contato? Tenha um site profissional, moderno e preparado para apresentar seu negócio da melhor forma.</p><strong className="conversion-price">Projetos a partir de R$ 399.</strong><p className="conversion-support">Conte para nós o que você precisa e receba uma proposta personalizada, sem compromisso.</p><a className="button button-light" href="#orcamento">Quero receber meu orçamento <Arrow /></a><small className="conversion-note">Leva menos de 1 minuto para enviar sua solicitação.</small></div></div></div></div></section>

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
          <p>Sou Kassio Kennedy, formado em <em>Engenharia de Software</em> e atuo diretamente no desenvolvimento de soluções digitais, unindo front-end, back-end, estratégia e experiência do usuário. Na K7 Sites, cada projeto recebe acompanhamento próximo para transformar objetivos comerciais em uma presença digital clara e profissional.</p>
          <p>Os projetos são planejados com atenção a <em>desempenho, responsividade, SEO técnico, mensuração e conversão</em>, sem perder de vista a identidade e a realidade de cada negócio.</p>
        </div>
      </div></section>

      <section className="section proof" id="depoimentos"><div className="container">
        <div className="section-heading centered reveal"><p className="eyebrow dark"><span /> AVALIAÇÕES NO GOOGLE</p><h2>A confiança cresce quando clientes reais <em>contam a experiência.</em></h2><p>Veja o que clientes da K7 Sites publicaram sobre seus projetos no Google.</p></div>
        <TestimonialsSlider />
      </div></section>

      <section className="section pricing" id="investimento"><div className="pricing-rockets" aria-hidden="true">{Array.from({ length: 12 }).map((_, index) => <span key={index}>🚀</span>)}</div><div className="container">
        <div className="section-heading centered reveal"><p className="eyebrow"><span /> FORMATOS DE PROJETO</p><h2>Escolha a solução adequada para <em>o seu objetivo.</em></h2><p>Compare as opções existentes e escolha o ponto de partida mais alinhado ao momento do seu negócio.</p></div>
        <div className="pricing-grid">{[
          { name: "Landing page", description: "Para divulgar uma oferta e gerar contatos", price: "R$ 399,00", detail: "a partir de", features: ["Página completa e estratégica", "Design responsivo", "Botões para WhatsApp", "Google SEO", "Copy organizada", "Entrega ágil"] },
          { name: "Site institucional", description: "Para apresentar sua empresa com autoridade", price: "R$ 699,00", detail: "a partir de", features: ["Home e páginas internas", "Páginas de serviços", "Design profissional", "Google SEO", "WhatsApp e formulário", "Orientação após a entrega"] },
          { name: "Projeto sob medida", description: "Para necessidades, integrações e estruturas especiais", price: "Sob avaliação", detail: "orçamento após análise", features: ["Escopo personalizado", "Funcionalidades específicas", "Integrações especiais", "Planejamento por etapas", "Prazo definido em proposta", "Acompanhamento próximo"] },
        ].map((plan, index) => <article className={index === 1 ? "price-card featured reveal" : "price-card reveal"} key={plan.name}>{index === 1 && <span className="recommended">MAIS POPULAR</span>}<small>0{index + 1}</small><h3>{plan.name}</h3><p>{plan.description}</p><div className="price"><span>{plan.detail}</span>{plan.price}</div><ul>{plan.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul><a className={index === 1 ? "button button-primary" : "button button-ghost"} href="#orcamento" onClick={() => trackCta("click_cta_service", "pricing", `Pedir orçamento — ${plan.name}`)}>Pedir orçamento <Arrow /></a></article>)}</div>
        <p className="payment-note reveal"><Check /> Condição padrão sugerida: 50% antes do início e 50% na conclusão do projeto.</p>
      </div></section>

      <section className="section faq" id="faq"><div className="container">
        <div className="section-heading centered reveal"><p className="eyebrow dark"><span /> DÚVIDAS FREQUENTES</p><h2>Ainda tem dúvidas? <em>A gente te ajuda.</em></h2><p>Veja as respostas mais importantes antes de começar. Se precisar, fale diretamente com a K7 Sites.</p></div>
        <div className="accordion faq-accordion">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "faq-item is-open" : "faq-item"} key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => { const willOpen = openFaq !== index; setOpenFaq(willOpen ? index : null); if (willOpen) trackEvent("faq_open", { page_path: window.location.pathname, question }); }}><span>{String(index + 1).padStart(2, "0")}</span>{question}<i>{openFaq === index ? "−" : "+"}</i></button><div className="faq-answer"><p>{answer}</p></div></article>)}</div><a className="text-link faq-cta" href="#orcamento">Ainda tem dúvidas? Solicite seu orçamento <Arrow /></a>
      </div></section>

      <section className="section contact" id="orcamento"><div className="contact-glow" aria-hidden="true" /><div className="container">
        <div className="section-heading centered contact-heading reveal"><p className="eyebrow"><span /> SOLICITE UM ORÇAMENTO</p><h2>Vamos colocar seu projeto <em>no ar?</em></h2><p>Conte um pouco sobre o que você precisa. Vamos conversar sobre a melhor solução para seu negócio.</p></div>
        <div className="contact-layout contact-layout-single"><div className="form-shell reveal"><HeroLeadForm placement="contact" /></div></div>
      </div></section>

      <section className="final-cta"><div className="container"><div className="final-cta-card reveal"><div className="final-orbit" aria-hidden="true" /><div className="final-cta-content"><div className="mini-logo"><Image src="/k7-logo.png" alt="K7 Sites" width={70} height={70} /></div><p>K7 SITES</p><h2>Sua empresa tem potencial. Vamos mostrar isso ao mundo?</h2><span className="final-cta-text">Dê o próximo passo para construir uma presença digital profissional, transmitir mais confiança e abrir novas oportunidades para seu negócio.</span><div className="final-cta-actions"><a className="button button-light" href="#orcamento">Quero tirar meu projeto do papel <Arrow /></a><a className="button final-cta-secondary" href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("final_cta", "Falar pelo WhatsApp")}>Falar pelo WhatsApp <Arrow diagonal /></a></div><small className="final-cta-note">K7 Sites — Sites profissionais e landing pages estratégicas para valorizar sua marca e gerar novas oportunidades.</small></div></div></div></section>

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
