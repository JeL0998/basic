import SectionShell from "@/components/sections/SectionShell";
import { Waves, Utensils, Sun } from "lucide-react";
export default function Features(){ const items=[
  {icon:Waves,title:"Beachfront",copy:"Steps from powdery sand and turquoise waters."},
  {icon:Utensils,title:"Seaside Dining",copy:"Fresh seafood and tropical flavors."},
  {icon:Sun,title:"Activities",copy:"Snorkel, island-hop, or simply unwind."}
];
  return (<SectionShell id="features"><div className="max-w-6xl mx-auto w-full">
    <h2 className="text-3xl md:text-5xl font-bold text-center">Why choose us</h2>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">{items.map(({icon:Icon,title,copy})=>(<div key={title} className="card p-6"><Icon className="h-6 w-6 text-[rgb(var(--brand))]"/><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-2 text-white/80">{copy}</p></div>))}</div>
  </div></SectionShell>);
}
