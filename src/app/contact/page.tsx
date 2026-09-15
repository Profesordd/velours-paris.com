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
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-700">Accueil</Link>
        <ChevronRight size={11} />
        <span className="text-gray-700 font-medium">Contact</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-900 mb-8">Contactez-nous</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-5">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Mail size={15} className="text-gray-400" />
              <p className="text-sm font-semibold text-gray-900">Email</p>
            </div>
            <a href="mailto:contact@sellier-paris.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              contact@sellier-paris.com
            </a>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={15} className="text-gray-400" />
              <p className="text-sm font-semibold text-gray-900">Disponibilité</p>
            </div>
            <p className="text-sm text-gray-500">Service client 7j/7</p>
            <p className="text-xs text-gray-400 mt-1">Réponse sous 24h</p>
          </div>
        </div>

        <div className="md:col-span-2">
          {sent ? (
            <div className="bg-green-50 border border-green-100 rounded-lg p-8 text-center">
              <Check size={32} className="text-green-500 mx-auto mb-3" />
              <p className="font-bold text-gray-900 mb-1">Message envoyé !</p>
              <p className="text-gray-500 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {[["nom", "Nom *"], ["email", "Email *"]].map(([name, label]) => (
                  <div key={name}>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">{label}</label>
                    <input required name={name} type={name === "email" ? "email" : "text"} value={(form as Record<string, string>)[name]} onChange={handleChange}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 bg-white" />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Sujet *</label>
                <input required name="sujet" value={form.sujet} onChange={handleChange}
                  className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 bg-white" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Message *</label>
                <textarea required name="message" value={form.message} onChange={handleChange} rows={5}
                  className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 resize-none bg-white" />
              </div>
              <button type="submit" className="w-full bg-gray-900 text-white py-3 font-semibold text-sm rounded hover:bg-gray-700 transition-colors">
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
