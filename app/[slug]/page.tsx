import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getNichePage,pages} from "@/lib/niche-pages";
import {NichePageClient} from "@/components/niche-page-client";
import "./niche-pages.css";
export function generateStaticParams(){return pages.map(([slug])=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const config=getNichePage(slug);if(!config)return {};
 const {niche,kind}=config;const term=kind==="site"?"Site Profissional":"Landing Page Profissional";
 const title=`${kind==="site"?"Criação de Site":"Criação de Landing Pages"} para ${niche.name} | K7 Sites`;
 const description=`${term} para ${niche.name}: criação de ${kind==="site"?"sites institucionais":"landing pages otimizadas"}, design responsivo, SEO e WhatsApp. Solicite orçamento à K7 Sites.`;
 const url=`https://www.k7sites.com.br/${slug}`;
 return {title,description,keywords:[`criação de ${kind==="site"?"sites":"landing pages"} para ${niche.name}`,`${term.toLowerCase()} para ${niche.name}`,`${kind==="site"?"sites profissionais":"landing pages profissionais"} responsivos para ${niche.name}`,`SEO para ${niche.singular}`,`desenvolvimento web para ${niche.name}`],alternates:{canonical:url},openGraph:{title,description,url,type:"website",siteName:"K7 Sites",locale:"pt_BR",images:[{url:niche.image,alt:`Exemplo visual de ${term.toLowerCase()} para ${niche.name}`}]},twitter:{card:"summary_large_image",title,description,images:[niche.image]}};
}
export default async function Page({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const config=getNichePage(slug);if(!config)notFound();
 const {niche,kind}=config;const product=kind==="site"?"criação de sites institucionais":"criação de landing pages";
 const faq=[{"@type":"Question",name:`O projeto para ${niche.name} é responsivo?`,acceptedAnswer:{"@type":"Answer",text:"Sim. O layout é desenvolvido para celulares, tablets e computadores."}},{"@type":"Question",name:`A ${kind==="site"?"criação do site":"landing page"} inclui SEO?`,acceptedAnswer:{"@type":"Answer",text:"O projeto inclui fundamentos de SEO técnico e conteúdo, sem garantia de posicionamento."}}];
 const structured={"@context":"https://schema.org","@graph":[{"@type":"Service",name:`${product} para ${niche.name}`,serviceType:product,provider:{"@type":"Organization",name:"K7 Sites",url:"https://www.k7sites.com.br"},areaServed:{"@type":"Country",name:"Brasil"},url:`https://www.k7sites.com.br/${slug}`,description:`Projeto de ${product} para ${niche.audience}, com SEO, design responsivo e WhatsApp.`},{"@type":"FAQPage",mainEntity:faq}]};
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,"\\u003c")}}/><NichePageClient slug={slug} niche={niche} kind={kind}/></>;
}
