"use client";
import { useEffect, useState } from "react";
const key="k7_cookie_consent_v1";
type Choice={analytics:boolean};
declare global {interface Window {gtag?:(...args:unknown[])=>void;dataLayer?:unknown[]}}
export function CookieConsent(){
 const [choice,setChoice]=useState<Choice|null>(null);
 const [open,setOpen]=useState(false);
 useEffect(()=>{
  let saved=false;
  try{const raw=localStorage.getItem(key);if(raw){const value=JSON.parse(raw);if(typeof value.analytics==="boolean"){setChoice(value);saved=true;}}}catch{}
  if(saved)return;
  const show=()=>setOpen(true);
  window.addEventListener("k7:intro-finished",show);
  const frame=requestAnimationFrame(()=>{const intro=document.documentElement.dataset.k7Intro;if(intro!=="loading"&&!document.querySelector(".site-preloader"))show();});
  return()=>{cancelAnimationFrame(frame);window.removeEventListener("k7:intro-finished",show);};
 },[]);
 useEffect(()=>{const reopen=()=>setOpen(true);window.addEventListener("k7:reopen-consent",reopen);return()=>window.removeEventListener("k7:reopen-consent",reopen);},[]);
 useEffect(()=>{if(!choice?.analytics)return;const id="G-2PK8GHK05G";window.dataLayer=window.dataLayer||[];window.gtag=(...args:unknown[])=>{window.dataLayer?.push(args);};window.gtag("js",new Date());window.gtag("config",id,{anonymize_ip:true});const script=document.createElement("script");script.src="https://www.googletagmanager.com/gtag/js?id="+id;script.async=true;document.head.appendChild(script);return()=>script.remove();},[choice?.analytics]);
 function save(analytics:boolean){try{localStorage.setItem(key,JSON.stringify({analytics}));}catch{}if(!analytics){window.gtag?.("consent","update",{analytics_storage:"denied"});for(const name of ["_ga","_ga_2PK8GHK05G"])document.cookie=name+"=; Max-Age=0; Path=/; SameSite=Lax";window.gtag=undefined;window.dataLayer=[];}setChoice({analytics});setOpen(false);}
 return open?<section className="k7-cookie-banner" role="dialog" aria-modal="false" aria-labelledby="cookie-title" aria-describedby="cookie-text"><div className="k7-cookie-kicker">K7 SITES · PRIVACIDADE</div><h2 id="cookie-title">Sua privacidade importa.</h2><p id="cookie-text">Utilizamos armazenamento essencial para o funcionamento do site. Com sua autorização, também usamos o Google Analytics para entender as visitas e melhorar sua experiência. Você pode recusar sem perder acesso ao site. Consulte a <a href="/politica-de-privacidade">Política de Privacidade</a>.</p><div className="k7-cookie-actions"><button type="button" onClick={()=>save(false)}>Recusar</button><button type="button" className="k7-cookie-accept" onClick={()=>save(true)}>Aceitar</button></div></section>:null;
}