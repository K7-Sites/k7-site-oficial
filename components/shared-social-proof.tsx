"use client";
import Image from "next/image";
export {faqs} from "@/lib/faqs";
import {useEffect,useRef,useState} from "react";
const googleReviewsLink = "https://share.google/pDIhvdTpTxOyWEIOe";
export const testimonials = [
  {
    name: "Gabriel Rodrigues Da Luz",
    details: "0 avaliação • 0 foto",
    date: "Avaliação no Google",
    text: "Excelente trabalho, atendeu a demanda e me deu sugestões que foram eficazes no meu negócio",
  },
  {
    name: "Alexandre Do Nascimento Ribeiro Pizatto",
    details: "2 avaliações • 0 foto",
    date: "Avaliação no Google",
    text: "Se pudesse dava nota 1000 pra vocês! superaram minhas expectativas em todos sentidos, custei pra achar mas finalmente achei uma empresa seria!! Sucesso sempre.",
  },
  {
    name: "Kaique Júnior macedo",
    details: "Local Guide • 2 avaliações • 40 fotos",
    date: "Avaliação no Google",
    text: "Excelente experiência, criaram o site da minha lavanderia . Ótimos profissionais, só tenho a agradecer, Deus abençoe vocês",
  },
  {
    name: "Kaio Santos",
    details: "7 avaliações",
    date: "Avaliação no Google",
    text: "Excelente experiência com a K7 Sites! Desde o primeiro contato, demonstraram profissionalismo, atenção aos detalhes e muita dedicação para entregar um resultado de qualidade. O atendimento foi muito bom e o trabalho superou minhas expectativas. Dá para perceber o cuidado e o compromisso em cada etapa. Recomendo muito para quem procura um serviço profissional, confiável e de qualidade!",
  },
  {
    name: "Beatriz Araújo",
    details: "3 avaliações • 0 foto",
    date: "Avaliação no Google",
    text: "Atendimento excelente. Criou minha página voltada para odontologia e hoje prospecto ainda mais clientes através dela 😍🚀👏 Obrigada.",
  },
  {
    name: "Breno Miguel",
    details: "3 avaliações • 0 foto",
    date: "Avaliação no Google",
    text: "Superou as expectativas, muito bom o trabalho e muita dedicação, sucesso. 🙌",
  },
  {
    name: "Daniele Pedrosa",
    details: "Local Guide • 9 avaliações • 27 fotos",
    date: "Avaliação no Google",
    text: "Amei o site que criou pra mim! Exatamente da forma que solicitei. Excelente profissional!",
  },
];

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14M14 7l5 5-5 5"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export function TestimonialsSlider() {
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
      <a className="testimonial-google-link" href={googleReviewsLink} target="_blank" rel="noopener noreferrer" aria-label="Ver todas as avaliações da K7 Sites no Google">Ver todas as avaliações no Google <Arrow diagonal /></a>
    </div>
  );
}

const Check = () => <span className="check" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none"><path d="m5 10.2 3.1 3.1L15.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>;
