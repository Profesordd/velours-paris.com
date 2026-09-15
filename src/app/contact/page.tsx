"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Mail, Clock, Check } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-1.5 text-[10px] text-[#7A7670] mb-8 uppercase tracking-[0.1em]">
        <Link href="/" className="hover:text-[#1C1C1C] transition-colors">Accueil</Link>
        <ChevronRight size={10} />
        <span className="text-[#1C1C1C] font-medium">Contact</span>
      </nav>

      <h1 className="text-[clamp(1.5rem,3vw,2rem)] font-black text-[#1C1C1C] mb-10">Contactez-nous</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="bg-[#F5F1E8] border border-[#E8E3DA] p-5">
            <div className="flex items-center gap-2 mb-2">
              <Mail size={14} className="text-[#B8963E]" />
              <p className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.15em]">Email</p>
            </div>
            <a href="mailto:contact@velours-paris.com" className="text-sm text-[#7A7670] hover:text-[#1C1C1C] transition-colors">
              contact@velours-paris.com
            </a>
          </div>
          <div className="bg-[#F5F1E8] border border-[#E8E3DA] p-5">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={14} className="text-[#B8963E]" />
              <p className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.15em]">Disponibilité</p>
            </div>
            <p className="text-sm text-[#7A7670]">Service client 7j/7</p>
            <p className="text-xs text-[#7A7670] mt-1">Réponse sous 24h</p>
          </div>
        </div>

        <div className="md:col-span-2">
          {sent ? (
            <div className="bg-[#F5F1E8] border border-[#E8E3DA] p-10 text-center">
              <Check size={32} className="text-[#B8963E] mx-auto mb-3" />
              <p className="font-bold text-[#1C1C1C] mb-1">Message envoyé !</p>
              <p className="text-[#7A7670] text-sm">Nous vous répondrons dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {[["nom", "Nom *"], ["email", "Email *"]].map(([name, label]) => (
                  <div key={name}>
                    <label className="block text-[10px] font-semibold text-[#7A7670] uppercase tracking-[0.1em] mb-1.5">{label}</label>
                    <input required name={name} type={name === "email" ? "email" : "text"} value={(form as Record<string, string>)[name]} onChange={handleChange}
                      className="w-full border border-[#E8E3DA] px-3 py-2.5 text-sm focus:outline-none focus:border-[#1C1C1C] bg-white transition-colors" />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-[#7A7670] uppercase tracking-[0.1em] mb-1.5">Sujet *</label>
                <input required name="sujet" value={form.sujet} onChange={handleChange}
                  className="w-full border border-[#E8E3DA] px-3 py-2.5 text-sm focus:outline-none focus:border-[#1C1C1C] bg-white transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-[#7A7670] uppercase tracking-[0.1em] mb-1.5">Message *</label>
                <textarea required name="message" value={form.message} onChange={handleChange} rows={5}
                  className="w-full border border-[#E8E3DA] px-3 py-2.5 text-sm focus:outline-none focus:border-[#1C1C1C] resize-none bg-white transition-colors" />
              </div>
              <button type="submit" className="w-full bg-[#1C1C1C] text-white py-3.5 font-bold text-[10px] tracking-[0.2em] uppercase hover:opacity-75 transition-opacity">
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
