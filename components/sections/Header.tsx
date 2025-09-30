"use client";
import {useEffect,useState} from "react"; import {m,AnimatePresence} from "framer-motion"; import ThemeSwitcher from "@/components/ThemeSwitcher"; import {Menu,X} from "lucide-react";
const LINKS=[["features","Features"],["rooms","Rooms"],["testimonials","Reviews"],["faq","FAQ"],["location","Location"],["inquiry","Contact"]] as const;
export default function Header(){ const [vis,setVis]=useState(false),[scr,setScr]=useState(false),[open,setOpen]=useState(false);
  useEffect(()=>{ const root=document.getElementById("snap")||undefined, hero=document.getElementById("hero"); const on=()=>{ const y=(document.getElementById("snap")?.scrollTop)??window.scrollY; setScr(y>8) }; const io=new IntersectionObserver(es=>es.forEach(e=>setVis(!(e.isIntersecting&&e.intersectionRatio>.5))),{root:root as any,threshold:[.5]}); if(hero) io.observe(hero); (root||window).addEventListener("scroll",on,{passive:true} as any); return ()=>{io.disconnect(); (root||window).removeEventListener("scroll",on as any)}; },[]);
  function to(id:string){ const el=document.getElementById(id),root=(document.getElementById("snap") as HTMLElement)||window as any; if(!el) return; root.scrollTo({top:(el as HTMLElement).offsetTop,behavior:"smooth"}); setOpen(false); }
  return (<m.header initial={false} animate={{opacity:vis?1:0,y:vis?0:-12,backgroundColor:scr?'rgba(17,25,40,.72)':'rgba(17,25,40,.35)',backdropFilter:scr?'blur(12px)':'blur(6px)',borderBottomColor:'rgba(255,255,255,.08)'}} className="fixed top-0 left-0 right-0 z-50 border-b text-white" style={{pointerEvents:vis?'auto':'none'}}>
    <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
      <button onClick={()=>to('hero')} className="font-bold tracking-wide text-[var(--s0)]">Azure Cove</button>
      <nav className="ml-auto hidden md:flex items-center gap-4 text-sm">{LINKS.map(([id,l])=>(<button key={id} onClick={()=>to(id)} className="hover:opacity-90">{l}</button>))}</nav>
      <div className="hidden sm:block"><ThemeSwitcher/></div>
      <button onClick={()=>setOpen(v=>!v)} className="ml-auto md:hidden rounded-lg border border-white/10 bg-white/5 p-2">{open?<X className='h-5 w-5'/>:<Menu className='h-5 w-5'/>}</button>
    </div>
    <AnimatePresence>{open&&(<m.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="md:hidden overflow-hidden border-t border-white/10"><div className="mx-auto max-w-6xl px-4 py-3 grid gap-3"><ThemeSwitcher/>{LINKS.map(([id,l])=>(<button key={id} onClick={()=>to(id)} className="text-left py-2">{l}</button>))}</div></m.div>)}</AnimatePresence>
  </m.header>); }
