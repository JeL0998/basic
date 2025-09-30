import SectionShell from "@/components/sections/SectionShell"; import {HelpCircle,CreditCard,MapPin} from "lucide-react";
export default function FAQ(){ const faqs=[
  {q:"Do you offer airport transfers?",a:"Yes, with prior arrangement.",icon:MapPin},
  {q:"Flexible payment options?",a:"We accept major cards and e-wallets.",icon:CreditCard},
  {q:"Is breakfast included?",a:"Included for selected room types.",icon:HelpCircle}
];
  return (<SectionShell id="faq"><div className="max-w-4xl mx-auto w-full"><h2 className="text-3xl md:text-5xl font-bold text-center">FAQ</h2><dl className="mt-8 grid gap-4">{faqs.map(({q,a,icon:Icon})=>(<div key={q} className="card p-5 flex items-start gap-3"><Icon className="h-5 w-5 text-[rgb(var(--brand))]"/><div><dt className="font-semibold">{q}</dt><dd className="text-white/80">{a}</dd></div></div>))}</dl></div></SectionShell>);
}
