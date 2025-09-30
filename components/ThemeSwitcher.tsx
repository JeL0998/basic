"use client";
const THEMES = ["theme-sky","theme-emerald","theme-rose","theme-amber","theme-indigo"] as const;
export default function ThemeSwitcher(){
  const setTheme = (cls:string) => { const html=document.documentElement; THEMES.forEach(t=>html.classList.remove(t)); html.classList.add(cls); };
  return (<div className="flex gap-2">{THEMES.map(t=>(<button key={t} onClick={()=>setTheme(t)} aria-label={t} className="h-6 w-6 rounded-full border border-white/20" style={{background:t.includes("sky")?"#0ea5e9":t.includes("emerald")?"#10b981":t.includes("rose")?"#f43f5e":t.includes("amber")?"#f59e0b":"#6366f1"}}/>))}</div>);
}
