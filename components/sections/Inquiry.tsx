"use client";
import SectionShell from "@/components/sections/SectionShell"; import {useState} from "react";
export default function Inquiry(){ const [form,setForm]=useState({name:"",email:"",message:""}); function update(k, v){ setForm(p=>({...p,[k]:v})) } function submit(e){ e.preventDefault(); alert("Thanks! This is a demo — wire to API route for production."); }
  return (<SectionShell id="inquiry"><div className="max-w-xl mx-auto w-full"><h2 className="text-3xl md:text-5xl font-bold text-center">Inquiry</h2>
    <form onSubmit={submit} className="mt-6 card p-5 grid gap-3">
      <input value={form.name} onChange={e=>update('name',e.target.value)} placeholder="Full name" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-white/30"/>
      <input value={form.email} onChange={e=>update('email',e.target.value)} placeholder="Email" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-white/30"/>
      <textarea value={form.message} onChange={e=>update('message',e.target.value)} placeholder="How can we help?" rows={4} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-white/30"/>
      <button className="btn-brand">Send inquiry</button>
    </form>
  </div></SectionShell>);
}
