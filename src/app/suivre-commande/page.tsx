"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Package, Truck, Check } from "lucide-react";

export default function SuivreCommandePage() {
  const [form, setForm] = useState({ numero: "", email: "" });
  const [result, setResult] = useState(false);

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-700">Accueil</Link>
        <ChevronRight size={11} />
        <span className="text-gray-700 font-medium">Suivre ma commande</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">Suivre ma commande</h1>
      <p className="text-gray-400 text-sm mb-8">Entrez votre numéro de commande et votre email.</p>

      <form onSubmit={(e) => { e.preventDefault(); setResult(true); }} className="space-y-4 mb-6">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Numéro de commande *</label>
          <input required value={form.numero} onChange={(e) => setForm((f) => ({ ...f, numero: e.target.value }))}
            placeholder="Ex : MF-2026-XXXX"
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 placeholder-gray-300 bg-white" />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Email *</label>
          <input required type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="votre@email.com"
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 placeholder-gray-300 bg-white" />
        </div>
        <button type="submit" className="w-full bg-gray-900 text-white py-3 font-semibold text-sm rounded hover:bg-gray-700 transition-colors">
          Suivre ma commande
        </button>
      </form>

      {result && (
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
          <div className="flex items-center gap-2 mb-4">
            <Truck size={17} className="text-blue-500" />
            <p className="font-semibold text-gray-900 text-sm">Commande en cours d'expédition</p>
          </div>
          <div className="space-y-3 mb-4">
            {[
              { label: "Commande reçue", done: true },
              { label: "En préparation", done: true },
              { label: "Expédiée", done: true },
              { label: "En cours de livraison", done: false },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${s.done ? "bg-green-500" : "bg-gray-100 border border-gray-200"}`}>
                  {s.done && <Check size={11} className="text-white" />}
                </div>
                <span className={`text-sm ${s.done ? "text-gray-800" : "text-gray-400"}`}>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-white rounded p-3 border border-blue-100">
            <Package size={14} className="text-gray-400" />
            <p className="text-sm text-gray-600">Livraison estimée sous <span className="font-semibold text-gray-900">5 à 7 jours ouvrés</span></p>
          </div>
        </div>
      )}

      <div className="mt-6 text-sm text-gray-400">
        Un problème ?{" "}
        <Link href="/contact" className="text-gray-900 underline underline-offset-2 hover:text-gray-600">
          Contactez-nous
        </Link>
      </div>
    </div>
  );
}
