import SectionShell from "@/components/sections/SectionShell"; import SafeImage from "@/components/primitives/SafeImage";
export default function Testimonials(){ const data=[
  {n:"Mika",q:"The sunsets were unreal. Best weekend!",img:"https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef"},
  {n:"Luis",q:"Clean villas and friendly staff.",img:"https://images.unsplash.com/photo-1512291313931-d4291048e7b5"},
  {n:"Hana",q:"Loved the snorkel tour—turtles everywhere!",img:"https://images.unsplash.com/photo-1519677100203-a0e668c92439"}
];
  return (<SectionShell id="testimonials"><div className="max-w-5xl mx-auto w-full text-center">
    <h2 className="text-3xl md:text-5xl font-bold">What guests say</h2>
    <div className="mt-8 grid gap-4 sm:grid-cols-3">{data.map(t=>(<article key={t.n} className="card overflow-hidden text-left"><div className="relative h-56"><SafeImage src={`${t.img}?q=80&w=1200&auto=format&fit=crop`} alt={t.n} fill className="object-cover" sizes="(max-width:640px) 100vw, 30vw"/><div className="absolute inset-x-0 bottom-0 h-20 fade-bottom"/></div><blockquote className="p-4"><p className="italic leading-relaxed">“{t.q}”</p><footer className="mt-2 text-sm text-white/80">— {t.n}</footer></blockquote></article>))}</div>
  </div></SectionShell>);
}
