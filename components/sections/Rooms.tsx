import SectionShell from "@/components/sections/SectionShell"; import SafeImage from "@/components/primitives/SafeImage";
export default function Rooms(){ const data=[
  {t:"Seaview Villa",d:"King bed • Balcony • Breakfast",p:"₱7,500 / night",img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"},
  {t:"Garden Suite",d:"Queen bed • Patio • Breakfast",p:"₱6,200 / night",img:"https://images.unsplash.com/photo-1505691938895-1758d7feb511"},
  {t:"Family Loft",d:"2 Beds • Living area",p:"₱8,900 / night",img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"}
];
  return (<SectionShell id="rooms"><div className="max-w-6xl mx-auto w-full">
    <h2 className="text-3xl md:text-5xl font-bold text-center">Rooms & Rates</h2>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">{data.map((r)=>(<article key={r.t} className="card overflow-hidden"><div className="relative aspect-[16/10]"><SafeImage src={`${r.img}?q=80&w=1600&auto=format&fit=crop`} alt={r.t} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw"/></div><div className="p-5"><h3 className="text-xl font-semibold">{r.t}</h3><p className="mt-1 text-white/80">{r.d}</p><div className="mt-3 badge">{r.p}</div></div></article>))}</div>
  </div></SectionShell>);
}
