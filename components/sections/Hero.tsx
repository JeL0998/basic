"use client";
import SafeImage from "@/components/primitives/SafeImage";
export default function Hero(){
  return (<section id="hero" data-section className="relative min-h-dvh snap-start overflow-hidden">
    <SafeImage src={"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2400&auto=format&fit=crop"} alt="Azure Cove" fill className="object-cover"/>
    <div className="absolute inset-0 bg-black/40"/><div className="absolute inset-x-0 bottom-0 h-40 fade-bottom"/>
    <div className="absolute inset-0 grid place-items-center text-center px-6"><div><h1 className="text-[var(--s2)] font-extrabold">Azure Cove</h1><p className="mt-3 text-white/90">Beachfront escape — white sand, clear waters.</p><a href="#inquiry" className="btn-brand mt-6">Inquire now</a></div></div>
  </section>);
}
