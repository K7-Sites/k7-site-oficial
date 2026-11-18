import Image from "next/image";
import { HeroLeadForm } from "@/components/hero-lead-form";
import { TestimonialsSlider } from "@/components/shared-social-proof";
import styles from "./criacao-de-sites-na-zona-norte.module.css";

type Faq = { question: string; answer: string };

const whatsapp =
  "https://wa.me/5511992108602?text=" +
  encodeURIComponent(
    "Olá! Vim pela página de criação de sites na Zona Norte de São Paulo e gostaria de solicitar uma proposta.",
  );

const advantages = [
  {
    number: "01",
    title: "Presença nas buscas",
    text: "Uma estrutura de conteúdo clara e otimizada ajuda o Google a compreender os serviços e a região de atuação da sua empresa.",
  },
  {
    number: "02",
    title: "Mais credibilidade",
    text: "Apresente seus serviços, diferenciais e canais de contato em um endereço profissional, com a identidade da sua marca.",
  },
  {
    number: "03",
    title: "Contato simplificado",
    text: "Facilite pedidos de orçamento com chamadas para ação, WhatsApp e formulários adequados à jornada do visitante.",
  },
  {
    number: "04",
    title: "Experiência em qualquer tela",
    text: "Seu conteúdo organizado para celular, tablet e computador, com navegação intuitiva e atenção ao desempenho.",
  },
];

const portfolio = [
  {
    name: "Quality Higienização",
    category: "Serviços locais",
    image: "/projetos-k7/quality-higienizacao.png",
    description: "Apresentação de serviços e contato direto para pedidos de orçamento.",
  },
  {
    name: "Smilo CRM",
    category: "Tecnologia e saúde",
    image: "/projetos-k7/smilo.png",
    description: "Site institucional com navegação organizada e apresentação de soluções.",
  },
  {
    name: "LS Climatização",
    category: "Prestação de serviços",
    image: "/projetos-k7/ls-climatizacao.png",
    description: "Comunicação objetiva dos serviços e canais de atendimento.",
  },
];

const neighborhoods = [
  "Santana",
  "Tucuruvi",
  "Jaçanã",
  "Tremembé",
  "Mandaqui",
  "Casa Verde",
  "Vila Maria",
  "Vila Guilherme",
  "Vila Medeiros",
  "Cachoeirinha",
  "Freguesia do Ó",
  "Limão",
  "Brasilândia",
  "Pirituba",
  "Jaraguá",
  "Perus",
];

const process = [
  {
    step: "01",
    title: "Entendemos o seu negócio",
    text: "Conversamos sobre seus serviços, público, diferenciais e objetivos de presença digital.",
  },
  {
    step: "02",
    title: "Planejamos a estrutura",
    text: "Definimos o formato ideal, a organização das informações e as principais chamadas para ação.",
  },
  {
    step: "03",
    title: "Desenvolvemos o site",
    text: "Criamos o layout responsivo e aplicamos boas práticas de usabilidade, desempenho e SEO técnico.",
  },
  {
    step: "04",
    title: "Revisamos e publicamos",
    text: "Apresentamos o projeto para validação e seguimos com a publicação conforme o escopo aprovado.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CriacaoDeSitesNaZonaNorte({ faq }: { faq: Faq[] }) {
  return (
    <div className={styles.page}>
      <a href="#conteudo" className={styles.skipLink}>Ir para o conteúdo</a>
      <header className={styles.header}>
        <div className={styles.container}>
          <a href="/" className={styles.brand} aria-label="K7 Sites — voltar à página inicial">
            <Image src="/k7-preloader-logo.png" alt="K7 Sites" width={66} height={68} priority />
          </a>
          <nav className={styles.nav} aria-label="Navegação da página">
            <a href="#vantagens">Vantagens</a>
            <a href="#solucoes">Soluções</a>
            <a href="#bairros">Regiões atendidas</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a href="#orcamento" className={styles.headerCta}>Solicitar proposta <ArrowIcon /></a>
        </div>
      </header>

      <main id="conteudo">
        <section className={styles.hero} aria-labelledby="zona-norte-titulo">
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroContent}>
              <nav aria-label="Você está aqui" className={styles.breadcrumb}>
                <a href="/">Início</a><span aria-hidden="true">/</span><span>Sites na Zona Norte</span>
              </nav>
              <p className={styles.eyebrow}>K7 SITES · SÃO PAULO · ATENDIMENTO ONLINE</p>
              <h1 id="zona-norte-titulo">Criação de sites na <span>Zona Norte de São Paulo</span></h1>
              <p className={styles.heroLead}>
                Sua empresa em Santana, Tucuruvi, Jaçanã ou em outro bairro da Zona Norte merece uma presença digital profissional, fácil de navegar e preparada para ser encontrada.
              </p>
              <p className={styles.heroDetail}>
                A K7 Sites desenvolve sites institucionais e landing pages sob medida, com design responsivo, boas práticas de SEO e caminhos claros para o cliente entrar em contato.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#orcamento">Solicitar proposta <ArrowIcon /></a>
                <a className={styles.secondaryButton} href="#projetos">Ver projetos <ArrowIcon /></a>
              </div>
              <ul className={styles.highlights} aria-label="Diferenciais do desenvolvimento">
                <li>SEO técnico</li><li>Design responsivo</li><li>WhatsApp integrado</li>
              </ul>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.heroImageFrame}>
                <Image
                  src="/hero-k7-sites-responsive.png"
                  alt="Exemplo de apresentação responsiva de site profissional da K7 Sites em computador e celular"
                  width={1100}
                  height={880}
                  sizes="(max-width: 980px) 90vw, 48vw"
                  className={styles.heroImage}
                  priority
                />
              </div>
              <div className={styles.visualCaption}><span aria-hidden="true">✦</span> Design personalizado para o seu negócio</div>
            </div>
          </div>
        </section>

        <section id="vantagens" className={`${styles.section} ${styles.lightSection}`} aria-labelledby="vantagens-titulo">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>PRESENÇA DIGITAL PARA NEGÓCIOS LOCAIS</p>
              <h2 id="vantagens-titulo">Por que sua empresa na Zona Norte precisa de um <span>site profissional?</span></h2>
              <p>Seja para apresentar uma clínica, escritório, comércio ou serviço, um bom site ajuda as pessoas a entender o que você oferece e como entrar em contato.</p>
            </div>
            <div className={styles.advantagesGrid}>
              {advantages.map(item => (
                <article className={styles.advantageCard} key={item.number}>
                  <span className={styles.cardNumber}>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="solucoes" className={`${styles.section} ${styles.darkSection}`} aria-labelledby="solucoes-titulo">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>SOLUÇÕES PARA CADA OBJETIVO</p>
              <h2 id="solucoes-titulo">Site institucional ou landing page: <span>qual faz sentido para você?</span></h2>
              <p>O formato certo depende do que sua empresa precisa comunicar e de como o cliente chega até você.</p>
            </div>
            <div className={styles.solutionsGrid}>
              <article className={styles.solutionCard}>
                <div className={styles.solutionCopy}>
                  <span className={styles.solutionLabel}>01 · PRESENÇA INSTITUCIONAL</span>
                  <h3>Criação de site profissional</h3>
                  <p>Ideal para apresentar sua empresa, serviços, diferenciais, projetos e informações de contato em uma estrutura organizada, com espaço para crescer.</p>
                  <ul><li>Conteúdo e navegação estruturados</li><li>Identidade visual personalizada</li><li>SEO técnico e experiência responsiva</li></ul>
                  <a href="#orcamento" className={styles.textLink}>Quero um site profissional <ArrowIcon /></a>
                </div>
                <div className={styles.solutionImage}>
                  <Image src="/projetos-k7/smilo.png" alt="Exemplo de site institucional desenvolvido pela K7 Sites para o Smilo CRM" fill sizes="(max-width: 820px) 90vw, 46vw" />
                </div>
              </article>
              <article className={styles.solutionCard}>
                <div className={styles.solutionCopy}>
                  <span className={styles.solutionLabel}>02 · FOCO EM UMA OFERTA</span>
                  <h3>Criação de landing page</h3>
                  <p>Uma página direcionada a um serviço ou campanha, com informações essenciais e chamadas para ação para facilitar o pedido de orçamento.</p>
                  <ul><li>Mensagem focada em uma solução</li><li>WhatsApp e formulário de contato</li><li>Estrutura adequada para receber tráfego</li></ul>
                  <a href="/criacao-de-landing-pages/" className={styles.textLink}>Conhecer landing pages <ArrowIcon /></a>
                </div>
                <div className={styles.solutionImage}>
                  <Image src="/projetos-k7/quality-higienizacao.png" alt="Exemplo de página de serviços da Quality Higienização desenvolvida pela K7 Sites" fill sizes="(max-width: 820px) 90vw, 46vw" />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="projetos" className={`${styles.section} ${styles.portfolioSection}`} aria-labelledby="projetos-titulo">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>PORTFÓLIO K7 SITES</p>
              <h2 id="projetos-titulo">Projetos reais, <span>soluções diferentes.</span></h2>
              <p>Alguns trabalhos da K7 Sites para negócios de diferentes segmentos. Cada novo projeto é planejado conforme a identidade e os objetivos do cliente.</p>
            </div>
            <div className={styles.portfolioGrid}>
              {portfolio.map(project => (
                <article className={styles.portfolioCard} key={project.name}>
                  <div className={styles.portfolioImage}>
                    <Image src={project.image} alt={`Prévia do projeto ${project.name}, desenvolvido pela K7 Sites`} fill sizes="(max-width: 620px) 90vw, (max-width: 980px) 45vw, 30vw" />
                  </div>
                  <div className={styles.portfolioContent}>
                    <span>{project.category}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <a href="/#projetos" className={styles.portfolioLink}>Conhecer mais projetos da K7 Sites <ArrowIcon /></a>
          </div>
        </section>

        <section id="bairros" className={`${styles.section} ${styles.regionSection}`} aria-labelledby="bairros-titulo">
          <div className={`${styles.container} ${styles.regionGrid}`}>
            <div>
              <p className={styles.eyebrow}>ATENDIMENTO À ZONA NORTE DE SP</p>
              <h2 id="bairros-titulo">Criação de sites para negócios em <span>toda a Zona Norte.</span></h2>
              <p>Desenvolvemos sites para empresas, profissionais liberais e prestadores de serviços que atendem a Zona Norte de São Paulo. O conteúdo pode destacar sua região de atuação de forma natural e útil para quem procura seus serviços.</p>
              <p>Nosso atendimento é <strong>100% online</strong>, com reuniões, acompanhamento e aprovações a distância. Você não precisa se deslocar para começar.</p>
              <a className={styles.secondaryButton} href="#orcamento">Falar sobre meu projeto <ArrowIcon /></a>
            </div>
            <div className={styles.neighborhoodPanel}>
              <h3>Bairros e regiões atendidos</h3>
              <p>Entre outras localidades da Zona Norte de São Paulo:</p>
              <ul className={styles.neighborhoods}>
                {neighborhoods.map(name => <li key={name}>{name}</li>)}
              </ul>
              <small>O atendimento online também está disponível para empresas de outras regiões do Brasil.</small>
            </div>
          </div>
        </section>

        <section id="processo" className={`${styles.section} ${styles.processSection}`} aria-labelledby="processo-titulo">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>DO BRIEFING À PUBLICAÇÃO</p>
              <h2 id="processo-titulo">Como funciona a <span>criação do seu site?</span></h2>
              <p>Um processo organizado para você acompanhar as etapas e saber o que está sendo desenvolvido.</p>
            </div>
            <ol className={styles.processGrid}>
              {process.map(item => <li key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}
            </ol>
          </div>
        </section>

        <section className={`${styles.section} ${styles.reviewsSection}`} aria-labelledby="avaliacoes-titulo">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>AVALIAÇÕES REAIS NO GOOGLE</p>
              <h2 id="avaliacoes-titulo">A experiência de quem <span>já contratou a K7 Sites.</span></h2>
              <p>Confira avaliações publicadas por clientes no Google, com acesso direto à fonte.</p>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <section id="duvidas" className={`${styles.section} ${styles.faqSection}`} aria-labelledby="duvidas-titulo">
          <div className={`${styles.container} ${styles.faqGrid}`}>
            <div className={styles.faqIntro}>
              <p className={styles.eyebrow}>PERGUNTAS FREQUENTES</p>
              <h2 id="duvidas-titulo">Dúvidas sobre criar um site <span>na Zona Norte?</span></h2>
              <p>Entenda como funciona o desenvolvimento e o que considerar antes de contratar.</p>
              <a href="#orcamento" className={styles.textLink}>Ainda tem dúvidas? Fale conosco <ArrowIcon /></a>
            </div>
            <div className={styles.faqList}>
              {faq.map(({ question, answer }) => (
                <details key={question}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="orcamento" className={`${styles.section} ${styles.contactSection}`} aria-labelledby="orcamento-titulo">
          <div className={`${styles.container} ${styles.contactGrid}`}>
            <div className={styles.contactCopy}>
              <p className={styles.eyebrow}>SEU PRÓXIMO PASSO COMEÇA AQUI</p>
              <h2 id="orcamento-titulo">Vamos criar o site da sua empresa <span>na Zona Norte de SP?</span></h2>
              <p>Conte o que seu negócio precisa. A K7 Sites prepara uma proposta de desenvolvimento adequada ao seu objetivo, seja um site institucional ou uma landing page.</p>
              <a className={styles.whatsappButton} href={whatsapp} target="_blank" rel="noopener noreferrer">
                <Image src="/whatsapp.svg" alt="" width={22} height={22} /> Falar direto pelo WhatsApp
              </a>
              <p className={styles.contactNote}>Atendimento online · WhatsApp (11) 99210-8602</p>
            </div>
            <div className={styles.contactForm}>
              <HeroLeadForm
                placement="contact"
                leadContext={{
                  slug: "criacao-de-sites-na-zona-norte",
                  product: "Site ou landing page",
                  niche: "Zona Norte de São Paulo",
                }}
                copy={{
                  kicker: "SOLICITAR PROPOSTA",
                  title: "Conte sobre o seu projeto",
                  description: "Preencha os dados e entraremos em contato para entender o que você precisa.",
                  submitLabel: "Solicitar proposta",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
