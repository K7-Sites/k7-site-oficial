"use client";
import { useEffect, useState } from "react";
const key = "k7_cookie_consent_v1";
type Choice = { analytics: boolean };
declare global { interface Window { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] } }
export function CookieConsent() {
 const [choice,setChoice]=useState<Choice|null>(null);
 const [open,setOpen]=useState(false);
 const [custom,setCustom]=useState(false);
 const [analytics,setAnalytics]=useState(false);
 useEffect(()=>{try{const raw=localStorage.getItem(key);if(raw){const saved=JSON.parse(raw);if(typeof saved.analytics==="boolean"){setChoice(saved);return;}}}catch{}setOpen(true);},[]);
 useEffect(()=>{if(!choice?.analytics)return;const id="G-2PK8GHK05G";window.dataLayer=window.dataLayer||[];window.gtag=(...args:unknown[])=>{window.dataLayer?.push(args);};window.gtag("js",new Date());window.gtag("config",id,{anonymize_ip:true});const script=document.createElement("script");script.src="https://www.googletagmanager.com/gtag/js?id="+id;script.async=true;document.head.appendChild(script);return()=>{script.remove();};},[choice?.analytics]);
 function save(next:Choice){try{localStorage.setItem(key,JSON.stringify(next));}catch{}if(!next.analytics&&choice?.analytics){window.gtag?.("consent","update",{analytics_storage:"denied"});for(const name of ["_ga","_ga_2PK8GHK05G"])document.cookie=name+"=; Max-Age=0; Path=/; SameSite=Lax";window.gtag=undefined;window.dataLayer=[];}setChoice(next);setOpen(false);setCustom(false);}
 return <><button type="button" className="k7-cookie-settings" onClick={()=>{setAnalytics(Boolean(choice?.analytics));setCustom(true);setOpen(true);}}>Preferências de cookies</button>
 {open&&<section className="k7-cookie-banner" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-text"><h2 id="cookie-title">Privacidade e cookies</h2><p id="cookie-text">Usamos armazenamento essencial para lembrar sua escolha. Google Analytics só é carregado com sua autorização. Recusar não impede o uso do site. Leia nossa <a href="/politica-de-privacidade">política de privacidade</a>.</p>
 {custom&&<label><input type="checkbox" checked={analytics} onChange={e=>setAnalytics(e.target.checked)}/> Permitir análise de visitas (Google Analytics)</label>}
 <div className="k7-cookie-actions"><button type="button" onClick={()=>save({analytics:false})}>Recusar opcionais</button>{custom?<button type="button" onClick={()=>save({analytics})}>Salvar preferências</button>:<button type="button" onClick={()=>setCustom(true)}>Personalizar</button>}<button type="button" className="k7-cookie-accept" onClick={()=>save({analytics:true})}>Aceitar análise</button></div></section>}</>;
}
