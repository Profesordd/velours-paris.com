"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Lock, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

type Step = "coordonnees" | "recapitulatif" | "confirmation";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState<Step>("coordonnees");
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", telephone: "", adresse: "", cp: "", ville: "", pays: "France" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  if (step === "confirmation") {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-5">
          <Check size={28} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Commande confirmée !</h1>
        <p className="text-gray-500 text-sm mb-1">Merci pour votre commande, {form.prenom} !</p>
        <p className="text-gray-500 text-sm mb-8">
          Un email de confirmation a été envoyé à <span className="text-gray-900 font-medium">{form.email}</span>.
        </p>
        <div className="bg-gray-50 rounded-lg border border-gray-100 p-5 mb-8 text-left">
          <p className="text-sm text-gray-500">Délai de livraison estimé :</p>
          <p className="font-bold text-gray-900 mt-1">5 à 7 jours ouvrés</p>
          <p className="text-xs text-gray-400 mt-1.5">Votre suivi vous sera envoyé par email entre 16h et 20h le jour d'expédition.</p>
        </div>
        <Link href="/boutique" className="inline-block bg-gray-900 text-white px-8 py-3 font-semibold text-sm rounded hover:bg-gray-700 transition-colors">
          Retour à la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-700">Accueil</Link>
        <ChevronRight size={11} />
        <Link href="/panier" className="hover:text-gray-700">Panier</Link>
        <ChevronRight size={11} />
        <span className="text-gray-700 font-medium">Commande</span>
      </nav>

      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-8">
        {(["coordonnees", "recapitulatif"] as const).map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === s ? "bg-gray-900 text-white" : step === "recapitulatif" && s === "coordonnees" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-400"}`}>
              {step === "recapitulatif" && s === "coordonnees" ? <Check size={11} /> : i + 1}
            </div>
            <span className={`text-xs font-medium ${step === s ? "text-gray-900" : "text-gray-400"}`}>
              {s === "coordonnees" ? "Coordonnées" : "Récapitulatif"}
            </span>
            {i === 0 && <ChevronRight size={12} className="text-gray-300 ml-1" />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === "coordonnees" ? (
            <form onSubmit={(e) => { e.preventDefault(); setStep("recapitulatif"); }} className="space-y-4">
              <h2 className="font-bold text-gray-900 text-lg mb-5">Vos coordonnées</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[["prenom", "Prénom"], ["nom", "Nom"]].map(([name, label]) => (
                  <div key={name}>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">{label} *</label>
                    <input required name={name} value={(form as Record<string, string>)[name]} onChange={handleChange}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-gray-400 bg-white" />
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Email *</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-gray-400 bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Téléphone</label>
                  <input name="telephone" value={form.telephone} onChange={handleChange}
                    className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-gray-400 bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Adresse *</label>
                <input required name="adresse" value={form.adresse} onChange={handleChange}
                  className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-gray-400 bg-white" />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Code postal *</label>
                  <input required name="cp" value={form.cp} onChange={handleChange}
                    className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-gray-400 bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Ville *</label>
                  <input required name="ville" value={form.ville} onChange={handleChange}
                    className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-gray-400 bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Pays</label>
                  <select name="pays" value={form.pays} onChange={handleChange}
                    className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-gray-400 bg-white">
                    <option>France</option>
                    <option>Belgique</option>
                    <option>Suisse</option>
                    <option>Luxembourg</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full bg-gray-900 text-white py-4 font-semibold text-sm rounded hover:bg-gray-700 transition-colors mt-2">
                Continuer →
              </button>
            </form>
          ) : (
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-5">Récapitulatif de la commande</h2>
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={`${item.productSlug}-${item.size}`} className="flex gap-3 bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div className="relative w-14 h-18 bg-white rounded overflow-hidden flex-shrink-0" style={{ height: "72px" }}>
                      <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 text-sm font-medium line-clamp-1">{item.name}</p>
                      <p className="text-gray-400 text-xs">Taille : {item.size} — Qté : {item.quantity}</p>
                      <p className="text-gray-900 font-bold text-sm mt-1">{(item.price * item.quantity).toFixed(2)} €</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mb-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">Adresse de livraison</p>
                <p className="text-sm text-gray-500">{form.prenom} {form.nom}<br />{form.adresse}<br />{form.cp} {form.ville}, {form.pays}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <Lock size={13} className="text-green-500" />
                  <p className="text-sm font-semibold text-gray-900">Paiement sécurisé — CB, Visa, Mastercard</p>
                </div>
                <div className="flex gap-2 mt-2">
                  {["VISA", "MC", "CB"].map((c) => (
                    <span key={c} className="border border-gray-200 text-gray-400 text-[10px] font-bold px-2 py-1 rounded bg-white">{c}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep("coordonnees")} className="flex-1 border border-gray-200 text-gray-600 py-3.5 text-sm font-medium rounded hover:border-gray-400 transition-colors">
                  ← Modifier
                </button>
                <button onClick={() => { clearCart(); setStep("confirmation"); }} className="flex-[2] bg-gray-900 text-white py-3.5 font-semibold text-sm rounded hover:bg-gray-700 transition-colors">
                  Confirmer la commande
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-5 sticky top-28">
            <h3 className="font-bold text-gray-900 mb-4 text-sm">Récapitulatif</h3>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Articles ({items.length})</span>
                <span>{total.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Livraison</span>
                <span className="text-green-600 font-semibold">Gratuite</span>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between font-bold text-gray-900">
                <span>Total</span>
                <span className="text-lg">{total.toFixed(2)} €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
