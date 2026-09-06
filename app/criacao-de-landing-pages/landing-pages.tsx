"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { HomeProjectsSection } from "@/components/ui/home-projects-gallery";
import { trackEvent } from "@/lib/analytics";

const baseMessage = "Olá! Vim pela página de Landing Pages da K7 Sites e gostaria de solicitar um orçamento.";
const whatsapp = `https://wa.me/5511949214071?text=${encodeURIComponent(baseMessage)}`;
const reviews = "https://share.google/pDIhvdTpTxOyWEIOe";

const benefits = [
  ["01", "design", "Design profissional", "Uma página alinhada à identidade e ao posicionamento da sua empresa."],
  ["02", "target", "Foco em conversão", "Estrutura que conduz o visitante da descoberta até o contato."],
  ["03", "devices", "Responsiva", "Experiência planejada para celular, tablet e computador."],
  ["04", "speed", "Alta performance", "Desenvolvimento cuidadoso para carregamento rápido e boa experiência."],
  ["05", "search", "SEO", "Estrutura técnica preparada para mecanismos de busca compreenderem sua oferta."],
  ["06", "message", "WhatsApp", "Chamadas estratégicas que tornam o próximo passo simples e direto."],
  ["07", "chart", "Analytics", "Estrutura preparada para acompanhar visitas e cliques quando a medição for contratada."],
];

const testimonials = [
  ["Gabriel Rodrigues Da Luz", "Excelente trabalho, atendeu a demanda e me deu sugestões que foram eficazes no meu negócio"],
  ["Alexandre Do Nascimento Ribeiro Pizatto", "Se pudesse dava nota 1000 pra vocês! superaram minhas expectativas em todos sentidos, custei pra achar mas finalmente achei uma empresa seria!! Sucesso sempre."],
  ["Kaique Júnior macedo", "Excelente experiência, criaram o site da minha lavanderia . Ótimos profissionais, só tenho a agradecer, Deus abençoe vocês"],
  ["Kaio Santos", "Excelente experiência com a K7 Sites! Desde o primeiro contato, demonstraram profissionalismo, atenção aos detalhes e muita dedicação para entregar um resultado de qualidade. O atendimento foi muito bom e o trabalho superou minhas expectativas. Dá para perceber o cuidado e o compromisso em cada etapa. Recomendo muito para quem procura um serviço profissional, confiável e de qualidade!"],
  ["Beatriz Araújo", "Atendimento excelente. Criou minha página voltada para odontologia e hoje prospecto ainda mais clientes através dela 😍🚀👏 Obrigada."],
  ["Breno Miguel", "Superou as expectativas, muito bom o trabalho e muita dedicação, sucesso. 🙌"],
  ["Daniele Pedrosa", "Amei o site que criou pra mim! Exatamente da forma que solicitei. Excelente profissional!"],
];

const included = ["Landing Page personalizada", "Design profissional", "Layout responsivo", "Integração com WhatsApp", "Formulário de contato", "SEO básico", "Estrutura preparada para Analytics", "Otimização de performance", "Orientação para publicação", "Ajustes finais previstos em proposta"];

const faqs = [
  ["O que é uma Landing Page?", "É uma página criada para apresentar uma oferta com clareza e conduzir o visitante a uma ação, como pedir um orçamento pelo WhatsApp."],
  ["Qual a diferença entre site e Landing Page?", "A Landing Page concentra a comunicação em um objetivo. Um site institucional costuma reunir várias páginas e informações mais amplas sobre a empresa."],
  ["Quanto custa uma Landing Page?", "Os projetos começam em R$ 399,00. O valor final depende do conteúdo, das funcionalidades e das integrações necessárias."],
  ["Quanto tempo demora para ficar pronta?", "O prazo é definido conforme o escopo e começa após aprovação, pagamento inicial e envio dos materiais. Alguns projetos podem ficar prontos em até 48 horas ou antes do prazo previsto."],
  ["Preciso ter domínio e hospedagem?", "Não para iniciar a conversa. Se você ainda não tiver, a K7 orienta a escolha e a configuração; custos e serviços são definidos no orçamento."],
  ["A página funciona no celular?", "Sim. O layout é planejado para celular, tablet e computador, com atenção especial à leitura, velocidade e aos botões de contato."],
  ["Posso solicitar alterações?", "Sim. A quantidade de rodadas de ajustes fica registrada na proposta para manter o processo claro e previsível."],
  ["Vocês configuram o WhatsApp?", "Sim. A página pode ter botões estratégicos que abrem uma conversa no número definido para o atendimento."],
  ["A página pode aparecer no Google?", "A estrutura é preparada para indexação e SEO básico. O posicionamento depende também de conteúdo, concorrência, autoridade e estratégia contínua."],
  ["É possível instalar Google Analytics?", "Sim. A medição pode ser configurada conforme o escopo, sempre com o serviço e o tratamento de dados definidos previamente."],
  ["Posso fazer anúncios para a página?", "Sim. Uma Landing Page pode receber tráfego de campanhas, desde que a oferta, a medição e os anúncios sejam planejados de forma consistente."],
];

const Arrow = () => <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const Check = () => <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const BenefitIcon = ({ type }: { type: string }) => {
  const paths: Record<string, string> = {
    design: "M5 19 19 5l4 4L9 23H5v-4ZM16 8l4 4M5 5h7M5 9h4",
    target: "M14 24a10 10 0 1 0 0-20 10 10 0 0 0 20Zm0-5a5 5 0 1 0 0-10 5 5 0 0 0 10Zm0-5 8-8",
    devices: "M3 6h17v12H3V6Zm21 4h3v14h-8v-3",
    speed: "M5 21a10 10 0 1 1 18 0M14 17l5-6",
    search: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm7-2 6 6M8 12h8M12 8v8",
    message: "M4 5h20v15H11l-6 5v-5H4V5Z",
    chart: "M5 23V12m7 11V5m7 18v-8m7 8H2",
  };
  return <svg className="lp-benefit-icon" aria-hidden="true" viewBox="0 0 28 28" fill="none"><path d={paths[type]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
};

function trackWhatsApp(location: string, text: string) {
  trackEvent("click_whatsapp", { button_location: location, page_path: window.location.pathname, link_text: text });
}

function WhatsAppButton({ location, children, light = false }: { location: string; children: ReactNode; light?: boolean }) {
  return <a className={`lp-button ${light ? "lp-button-light" : "lp-button-primary"}`} href={whatsapp} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp(location, String(children))}>{children}<Arrow /></a>;
}

export default function LandingPages() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.12 });
    document.querySelectorAll(".lp-reveal, .reveal").forEach((node) => observer.observe(node));
    const progress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll", max > 0 ? String(window.scrollY / max) : "0");
    };
    window.addEventListener("scroll", progress, { passive: true });
    progress();
    return () => { observer.disconnect(); window.removeEventListener("scroll", progress); };
  }, []);

  return <main className="lp-page" id="inicio">
    <div className="scroll-progress" aria-hidden="true" />
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <header className="lp-header">
      <Link className="lp-brand" href="/" aria-label="K7 Sites — página inicial"><Image src="/k7-preloader-logo.png" alt="K7 Sites" width={84} height={87} priority /></Link>
      <nav className={menuOpen ? "lp-nav is-open" : "lp-nav"} aria-label="Navegação da página">
        <a href="#beneficios" onClick={() => setMenuOpen(false)}>Benefícios</a><a href="#exemplos" onClick={() => setMenuOpen(false)}>Exemplos</a><a href="#processo" onClick={() => setMenuOpen(false)}>Processo</a><a href="#investimento" onClick={() => setMenuOpen(false)}>Investimento</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
      </nav>
      <WhatsAppButton location="header">Solicitar orçamento</WhatsAppButton>
      <button className="lp-menu" type="button" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
    </header>

    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a K7 Sites pelo WhatsApp" onClick={() => trackWhatsApp("floating_button", "Falar pelo WhatsApp")}><Image src="/whatsapp.svg" alt="" width={38} height={38} aria-hidden="true" /></a>

    <section className="lp-hero" id="conteudo"><div className="lp-grid" aria-hidden="true" /><div className="lp-orb" aria-hidden="true" />
      <div className="lp-container lp-hero-layout">
        <div className="lp-hero-copy">
          <p className="lp-eyebrow">CRIAÇÃO DE LANDING PAGES PROFISSIONAIS</p>
          <h1>Criação de Landing Page profissional a partir de <em>R$399,00</em></h1>
          <p className="lp-lead">Criamos landing pages personalizadas para empresas, profissionais e prestadores de serviço que precisam apresentar uma oferta com clareza, fortalecer a confiança e transformar visitas em contatos pelo WhatsApp.</p>
          <div className="lp-actions"><WhatsAppButton location="hero">Quero minha Landing Page</WhatsAppButton><a className="lp-button lp-button-ghost" href="#exemplos">Ver exemplos <Arrow /></a></div>
          <ul className="lp-benefit-list">{["Design profissional", "Responsiva", "Estrutura preparada para SEO", "Foco em conversão"].map(item => <li key={item}><Check />{item}</li>)}</ul>
        </div>
        <div className="lp-device-stage" aria-label="Exemplo de Landing Page exibida em notebook e smartphone">
          <div className="lp-float-note lp-note-one"><b>Contato direto</b><span>WhatsApp estratégico</span></div>
          <div className="lp-laptop"><div className="lp-browser-bar"><i /><i /><i /><span>almeidaecastro.adv.br</span></div><div className="lp-screen"><div className="lp-dental-mock lp-legal-mock"><div className="lp-dental-nav"><b>ALMEIDA & CASTRO<small>ADVOCACIA</small></b><span>O escritório &nbsp; Atuação &nbsp; Equipe</span><i>Contato reservado</i></div><div className="lp-dental-hero"><Image src="/niche-premium/law.png" alt="Mockup demonstrativo de Landing Page para escritório de advocacia" fill sizes="(max-width: 860px) 88vw, 530px" priority /><div><small>ATUAÇÃO JURÍDICA PERSONALIZADA</small><h2>Defesa jurídica estratégica para proteger seus direitos.</h2><p>Atuação transparente e comprometida com cada caso.</p><b>Falar com um advogado</b></div></div><div className="lp-dental-services"><span><b>15+ anos</b>Experiência estratégica</span><span><b>Atendimento próximo</b>Análise individual</span><span><b>Sigilo</b>Confidencialidade</span></div><div className="lp-dental-more"><small>ÁREAS DE ATUAÇÃO</small><h3>Estratégia para pessoas e empresas.</h3><div><article><b>Direito Civil</b><span>Orientação e defesa de interesses.</span></article><article><b>Empresarial</b><span>Contratos, riscos e consultoria.</span></article><article><b>Trabalhista</b><span>Atuação preventiva e contenciosa.</span></article></div><p>Direito de Família · Contratos · Consultoria Jurídica</p></div><footer><b>ALMEIDA & CASTRO</b><span>Escritório demonstrativo · dados fictícios</span><i>Falar com a equipe</i></footer></div></div></div>
          <div className="lp-phone"><div className="lp-phone-notch" /><div className="lp-dental-mobile lp-legal-mobile"><Image src="/niche-premium/law.png" alt="Versão mobile do mockup demonstrativo de advocacia" width={132} height={78} priority /><b>ALMEIDA & CASTRO</b><h3>Defesa jurídica estratégica.</h3><span>Falar com um advogado</span><small>Civil · Empresarial · Trabalhista</small><div className="lp-dental-mobile-more"><b>Áreas de atuação</b><p>Direito Civil e de Família</p><p>Contratos e Direito Empresarial</p><p>Consultoria Jurídica</p><strong>Atendimento confidencial</strong></div></div></div>
          <div className="lp-float-note lp-note-two"><b>100% responsiva</b><span>Em qualquer tela</span></div>
        </div>
      </div>
    </section>

    <section className="lp-section lp-devices"><div className="lp-container lp-two-col">
      <div className="lp-heading lp-reveal"><p className="lp-eyebrow">EXPERIÊNCIA RESPONSIVA</p><h2>Sua empresa profissional em <em>qualquer tela.</em></h2><p>O conteúdo se adapta sem perder hierarquia, legibilidade ou acesso rápido ao contato.</p></div>
      <div className="lp-device-demo lp-reveal"><div className="lp-demo-desktop"><Image src="/project-stream/higienizacao.jpg" alt="Landing Page demonstrativa exibida em desktop" fill sizes="460px" /></div><div className="lp-demo-tablet"><Image src="/project-stream/higienizacao.jpg" alt="Landing Page demonstrativa exibida em tablet" fill sizes="190px" /></div><div className="lp-demo-mobile"><Image src="/project-stream/higienizacao.jpg" alt="Landing Page demonstrativa exibida em smartphone" fill sizes="110px" /></div></div>
    </div></section>

    <section className="lp-section lp-problem"><div className="lp-container">
      <div className="lp-heading lp-reveal"><p className="lp-eyebrow">PRESENÇA DIGITAL COM DIREÇÃO</p><h2>Seu cliente pesquisa sua empresa. <em>O que ele encontra?</em></h2><p>Quando as informações estão espalhadas, entender o valor do seu trabalho e dar o próximo passo se torna mais difícil.</p></div>
      <div className="lp-before-after">
        <article className="lp-compare-card lp-reveal"><small>ANTES</small><h3>Comunicação dispersa</h3><ul>{["Apenas redes sociais", "Informações soltas", "Serviços pouco claros", "Próximo passo indefinido"].map(i => <li key={i}>{i}</li>)}</ul></article>
        <div className="lp-transition" aria-hidden="true"><Arrow /></div>
        <article className="lp-compare-card is-after lp-reveal"><small>DEPOIS</small><h3>Uma jornada profissional</h3><ul>{["Oferta organizada", "Diferenciais visíveis", "Provas de confiança", "CTA direto para WhatsApp"].map(i => <li key={i}><Check />{i}</li>)}</ul></article>
      </div>
    </div></section>

    <section className="lp-section lp-explainer"><div className="lp-container lp-two-col">
      <div className="lp-heading lp-reveal"><p className="lp-eyebrow">CLAREZA QUE CONDUZ</p><h2>Uma página com um <em>objetivo específico.</em></h2><p>Uma Landing Page apresenta sua oferta de forma estratégica, responde às dúvidas essenciais e mostra ao visitante exatamente qual é o próximo passo.</p></div>
      <ol className="lp-funnel lp-reveal">{["Visita sua página", "Conhece sua empresa", "Entende a oferta", "Entra em contato"].map((item, index) => <li key={item}><span>0{index + 1}</span><b>{item}</b></li>)}</ol>
    </div></section>

    <section className="lp-section lp-included" id="landing-page-profissional"><div className="lp-container lp-two-col">
      <div className="lp-heading lp-reveal"><p className="lp-eyebrow">LANDING PAGE PARA EMPRESAS E PROFISSIONAIS</p><h2>Quando uma <em>Landing Page profissional</em> faz sentido?</h2><p>Ela é indicada quando você precisa concentrar a atenção em um serviço, campanha ou oferta e facilitar uma ação específica. Em vez de espalhar informações em vários canais, a página organiza proposta de valor, diferenciais, prova social, dúvidas frequentes e contato em uma única jornada.</p><p>Para negócios locais, profissionais liberais, prestadores de serviço, cursos e empresas que anunciam na internet, uma landing page pode funcionar como ponto central entre Google, anúncios, redes sociais e o atendimento comercial.</p></div>
      <ul className="lp-included-list lp-reveal">{["Apresentar um serviço de forma clara", "Receber tráfego de Google e campanhas", "Direcionar contatos para o WhatsApp", "Explicar preço, processo e diferenciais", "Mostrar projetos e avaliações reais", "Criar uma URL própria para uma oferta"].map(i => <li key={i}><Check />{i}</li>)}</ul>
    </div></section>

    <section className="lp-section lp-perception"><div className="lp-container">
      <div className="lp-heading lp-centered lp-reveal"><p className="lp-eyebrow">ESTRATÉGIA DE CONTEÚDO E SEO</p><h2>Uma página pensada para <em>pessoas e mecanismos de busca.</em></h2><p>SEO começa com conteúdo útil e estrutura técnica consistente. A K7 organiza títulos, textos, imagens, metadados e navegação para que o tema da página fique claro sem transformar a experiência em uma sequência artificial de palavras-chave.</p></div>
      <div className="lp-perception-grid"><article className="lp-list-panel lp-reveal"><small>CONTEÚDO</small>{["Oferta explicada com clareza", "Dúvidas reais respondidas", "Hierarquia de títulos", "Texto legível e objetivo", "Links internos úteis"].map(i => <p key={i}>{i}</p>)}</article><article className="lp-list-panel featured lp-reveal"><small>ESTRUTURA TÉCNICA</small>{["URL canônica", "Metadados próprios", "Dados estruturados", "Sitemap e rastreamento", "Experiência responsiva", "Imagens otimizadas"].map(i => <p key={i}><Check />{i}</p>)}</article></div>
      <div className="lp-actions" style={{ justifyContent: "center", marginTop: 32 }}><Link className="lp-button lp-button-ghost" href="/#servicos">Conhecer todos os serviços da K7 Sites <Arrow /></Link></div>
    </div></section>

    <HomeProjectsSection id="exemplos" />

    <section className="lp-section lp-benefits" id="beneficios"><div className="lp-container">
      <div className="lp-heading lp-reveal"><p className="lp-eyebrow">UMA ESTRUTURA COMPLETA</p><h2>Cada detalhe trabalha pela <em>percepção da sua empresa.</em></h2></div>
      <div className="lp-benefit-grid">{benefits.map(([number, icon, title, text]) => <article className="lp-benefit-card lp-snake-card lp-reveal" key={number}><div><span>{number}</span><BenefitIcon type={icon} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className="lp-section lp-perception"><div className="lp-container">
      <div className="lp-heading lp-centered lp-reveal"><p className="lp-eyebrow">POSICIONAMENTO</p><h2>Não é apenas ter um site. É como sua empresa é <em>percebida.</em></h2></div>
      <div className="lp-perception-grid"><article className="lp-list-panel lp-reveal"><small>SEM LANDING PAGE</small>{["Presença digital limitada", "Comunicação dispersa", "Pouca clareza", "Diferenciais escondidos", "Contato menos direcionado"].map(i => <p key={i}>{i}</p>)}</article><article className="lp-list-panel featured lp-reveal"><small>COM LANDING PAGE K7 SITES</small>{["Apresentação profissional", "Oferta clara", "Diferenciais estratégicos", "Provas de confiança", "CTA direto", "Experiência otimizada"].map(i => <p key={i}><Check />{i}</p>)}</article></div>
    </div></section>

    <section className="lp-section lp-included"><div className="lp-container lp-two-col">
      <div className="lp-heading lp-reveal"><p className="lp-eyebrow">O QUE VOCÊ RECEBE</p><h2>Da estratégia à <em>entrega final.</em></h2><p>O escopo é confirmado em proposta para que você saiba exatamente o que faz parte do projeto.</p></div>
      <ul className="lp-included-list lp-reveal">{included.map(i => <li key={i}><Check />{i}</li>)}</ul>
    </div></section>

    <section className="lp-section lp-process" id="processo"><div className="lp-container">
      <div className="lp-heading lp-centered lp-reveal"><p className="lp-eyebrow">PROCESSO TRANSPARENTE</p><h2>Do briefing à página <em>publicada.</em></h2></div>
      <div className="lp-process-grid">{[["01","Briefing","Entendemos sua empresa, público e objetivo."],["02","Estratégia","Organizamos estrutura, conteúdo e direcionamento."],["03","Desenvolvimento","Criamos a experiência visual e responsiva."],["04","Ajustes","Você avalia e fazemos os ajustes combinados."],["05","Publicação","Validamos e orientamos a entrada da página no ar."]].map(([n,t,d]) => <article className="lp-process-card lp-reveal" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </div></section>

    <section className="lp-section lp-proof"><div className="lp-container">
      <div className="lp-heading lp-centered lp-reveal"><p className="lp-eyebrow">AVALIAÇÕES REAIS NO GOOGLE</p><h2>Confiança construída em <em>projetos reais.</em></h2><p>Experiências publicadas por clientes da K7 Sites no Google.</p></div>
      <div className="lp-review-slider lp-reveal"><div className="lp-review-viewport"><div className="lp-review-track" style={{ transform: `translateX(-${activeReview * 100}%)` }}>{testimonials.map(([name,text]) => <blockquote className="lp-review" key={name}><div aria-label="5 de 5 estrelas">★★★★★</div><p>“{text}”</p><footer><b>{name}</b><span>Avaliação publicada no Google</span></footer></blockquote>)}</div></div><div className="lp-review-controls"><button type="button" aria-label="Avaliação anterior" onClick={() => setActiveReview((activeReview - 1 + testimonials.length) % testimonials.length)}>←</button><div>{testimonials.map(([name],index) => <button type="button" className={activeReview === index ? "is-active" : ""} aria-label={`Ver avaliação de ${name}`} aria-current={activeReview === index ? "true" : undefined} onClick={() => setActiveReview(index)} key={name} />)}</div><button type="button" aria-label="Próxima avaliação" onClick={() => setActiveReview((activeReview + 1) % testimonials.length)}>→</button></div><a className="lp-text-link" href={reviews} target="_blank" rel="noreferrer">Ver todas no Google <Arrow /></a></div>
    </div></section>

    <section className="lp-section lp-offer" id="investimento"><div className="lp-container"><div className="lp-offer-card lp-reveal"><div><p className="lp-eyebrow">LANDING PAGE PROFISSIONAL</p><h2>Uma presença à altura do seu negócio.</h2><p>Projeto personalizado, responsivo e construído para apresentar sua oferta com clareza.</p></div><div className="lp-price"><small>A PARTIR DE</small><strong>R$ 399,00</strong><ul>{["Desenvolvimento profissional", "Layout responsivo", "WhatsApp", "SEO básico", "Orientação para publicação"].map(i => <li key={i}><Check />{i}</li>)}</ul><WhatsAppButton location="preco" light>Solicitar orçamento</WhatsAppButton></div></div></div></section>

    <section className="lp-section lp-faq" id="faq"><div className="lp-container">
      <div className="lp-heading lp-centered lp-reveal"><p className="lp-eyebrow">DÚVIDAS FREQUENTES</p><h2>Respostas claras antes de <em>começar.</em></h2></div>
      <div className="lp-accordion">{faqs.map(([q,a], index) => <article className={openFaq === index ? "lp-faq-item is-open" : "lp-faq-item"} key={q}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{String(index + 1).padStart(2,"0")}</span>{q}<i>{openFaq === index ? "−" : "+"}</i></button><div><p>{a}</p></div></article>)}</div>
    </div></section>

    <section className="lp-final"><div className="lp-grid" aria-hidden="true" /><div className="lp-container lp-final-content lp-reveal"><Image src="/k7-preloader-logo.png" alt="K7 Sites" width={150} height={154} /><p>SUA PRÓXIMA OPORTUNIDADE PODE COMEÇAR AQUI</p><h2>Sua empresa já está pronta. Agora ela precisa de uma presença digital à altura.</h2><span>Vamos criar uma Landing Page profissional para apresentar seu negócio, gerar confiança e transformar visitantes em novas oportunidades.</span><WhatsAppButton location="cta_final" light>Quero minha Landing Page</WhatsAppButton></div></section>

    <footer className="lp-footer"><div className="lp-container lp-footer-grid"><div><Link href="/" aria-label="K7 Sites — início"><Image src="/k7-preloader-logo.png" alt="K7 Sites" width={104} height={108} /></Link><p>Sites e landing pages com estratégia, identidade e acabamento profissional.</p></div><div><small>NAVEGAÇÃO</small><Link href="/">Página inicial</Link><Link href="/#servicos">Todos os serviços</Link><a href="#beneficios">Benefícios</a><a href="#exemplos">Exemplos</a><a href="#processo">Processo</a><a href="#faq">FAQ</a></div><div><small>CONTATO</small><a href="mailto:k7sites@gmail.com">k7sites@gmail.com</a><a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("footer", "WhatsApp: (11) 94921-4071")}>WhatsApp: (11) 94921-4071</a></div></div><div className="lp-container lp-footer-bottom"><span>© {new Date().getFullYear()} K7 Sites. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
  </main>;
}
