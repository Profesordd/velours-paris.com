"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight, ShoppingCart, Check, Ruler,
  Truck, RotateCcw, Shield, ChevronDown,
} from "lucide-react";
import { getProductBySlug, getSimilarProducts } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import SizeSelector from "@/components/ui/SizeSelector";
import ProductCard from "@/components/ui/ProductCard";

const productFaq = [
  {
    q: "Quels sont les délais de livraison ?",
    a: "Votre commande est expédiée sous 24-48h. La livraison en France métropolitaine prend 5 à 7 jours ouvrés via Colissimo.",
  },
  {
    q: "Comment choisir la taille de ma ceinture ?",
    a: "Les tailles sont en centimètres (longueur totale du cuir). Mesurez votre tour de taille et ajoutez 15-20 cm pour obtenir votre taille. Ex : tour de taille 80 cm → taille 95 ou 100.",
  },
  {
    q: "Puis-je retourner l'article s'il ne me convient pas ?",
    a: "Oui, vous disposez de 30 jours pour retourner votre article non porté. Les frais de retour sont entièrement pris en charge par Sellier Paris.",
  },
  {
    q: "Comment entretenir mon cuir ?",
    a: "Appliquez une crème nourrissante incolore tous les 3 à 6 mois. Séchez à l'air naturellement si mouillé. Le cuir pleine fleur développe une patine unique avec l'usage — c'est normal et recherché.",
  },
];

function FAQItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="border-b border-[#E5DDD0] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3.5 text-left hover:bg-[#F7F1E8] px-2 transition-colors"
      >
        <span className="text-[#1A1410] text-sm font-medium pr-4">{item.q}</span>
        <ChevronDown size={15} className={`text-[#8A7A6A] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        ref={contentRef}
        style={{
          height: open ? (contentRef.current?.scrollHeight ?? "auto") : 0,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <p className="px-2 pb-3.5 text-[#8A7A6A] text-sm leading-relaxed">{item.a}</p>
      </div>
    </div>
  );
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  const similar = getSimilarProducts(params.slug, 4);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState<"description" | "caracteristiques">("description");
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-[#8A7A6A] mb-4 text-sm">Produit introuvable.</p>
        <Link href="/boutique" className="text-[#1A1410] underline text-sm underline-offset-4">
          ← Retour boutique
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    const effectiveSize = product.sizes[0] === "Unique" ? "Unique" : selectedSize;
    if (!effectiveSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2500);
      return;
    }
    addItem({
      productSlug: product.slug,
      name: product.name,
      price: product.price,
      size: effectiveSize,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const badgeStyle: Record<string, string> = {
    BESTSELLER: "bg-[#C08040] text-white",
    NOUVEAU:    "bg-white text-[#1A1410] border border-[#1A1410]",
    EXCLUSIF:   "bg-[#1A1410] text-white",
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[10px] text-[#8A7A6A] mb-8 uppercase tracking-[0.1em]">
        <Link href="/" className="hover:text-[#1A1410] transition-colors">Accueil</Link>
        <ChevronRight size={10} />
        <Link href="/boutique" className="hover:text-[#1A1410] transition-colors">Boutique</Link>
        <ChevronRight size={10} />
        <span className="text-[#1A1410] font-medium line-clamp-1">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* ── Galerie ── */}
        <div className="space-y-2">
          <div className="relative bg-[#F7F1E8] overflow-hidden" style={{ aspectRatio: "1/1" }}>
            <Image
              src={product.images[activeImg]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              unoptimized
            />
            {product.badge && (
              <span className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 ${badgeStyle[product.badge] ?? "bg-[#1A1410] text-white"}`}>
                {product.badge}
              </span>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 h-20 flex-shrink-0 overflow-hidden border-2 transition-colors ${activeImg === i ? "border-[#1A1410]" : "border-transparent hover:border-[#E5DDD0]"}`}
                >
                  <Image src={img} alt="" fill className="object-cover" unoptimized />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Infos ── */}
        <div>
          <p className="text-[9px] font-semibold text-[#C08040] uppercase tracking-[0.25em] mb-2">{product.category}</p>
          <h1 className="text-xl md:text-2xl font-black text-[#1A1410] leading-snug mb-5">
            {product.name}
          </h1>

          <p className="text-3xl font-black text-[#1A1410] mb-7">{product.price.toFixed(2)} €</p>

          {/* Taille */}
          {product.sizes.length > 0 && product.sizes[0] !== "Unique" ? (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#1A1410]">
                  Taille{selectedSize && <span className="text-[#C08040] ml-1.5">{selectedSize}</span>}
                </p>
                <button className="flex items-center gap-1 text-[10px] text-[#8A7A6A] hover:text-[#1A1410] transition-colors">
                  <Ruler size={11} /> Guide des tailles
                </button>
              </div>
              <SizeSelector sizes={product.sizes} selected={selectedSize} onSelect={setSelectedSize} />
              {sizeError && <p className="text-red-500 text-xs mt-2">Veuillez sélectionner une taille.</p>}
            </div>
          ) : (
            <div className="mb-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8A7A6A] border border-[#E5DDD0] px-3 py-1.5 inline-block">
                Taille unique
              </span>
            </div>
          )}

          {/* Bouton panier */}
          <button
            onClick={handleAdd}
            className={`w-full py-4 flex items-center justify-center gap-2 font-bold text-[11px] tracking-[0.15em] uppercase transition-all duration-200 ${
              added
                ? "bg-green-700 text-white"
                : "bg-[#1A1410] text-white hover:opacity-75"
            }`}
          >
            {added ? <><Check size={15} /> Ajouté au panier</> : <><ShoppingCart size={15} /> Ajouter au panier</>}
          </button>

          {/* Réassurance */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[
              { icon: <Truck size={13} strokeWidth={1.5} />, label: "Livraison gratuite" },
              { icon: <RotateCcw size={13} strokeWidth={1.5} />, label: "Retour 30j" },
              { icon: <Shield size={13} strokeWidth={1.5} />, label: "Paiement sécurisé" },
            ].map((item) => (
              <div key={item.label} className="bg-[#F7F1E8] border border-[#E5DDD0] p-2.5 text-center">
                <div className="flex justify-center text-[#C08040] mb-1">{item.icon}</div>
                <p className="text-[#8A7A6A] text-[9px] font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Tabs description / caractéristiques */}
          <div className="mt-8">
            <div className="flex border-b border-[#E5DDD0] mb-4">
              {(["description", "caracteristiques"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors ${
                    activeTab === tab
                      ? "text-[#1A1410] border-b-2 border-[#1A1410] -mb-px"
                      : "text-[#8A7A6A] hover:text-[#1A1410]"
                  }`}
                >
                  {tab === "description" ? "Description" : "Caractéristiques"}
                </button>
              ))}
            </div>
            {activeTab === "description" ? (
              <p className="text-[#8A7A6A] text-sm leading-relaxed">{product.description}</p>
            ) : (
              <table className="w-full text-sm">
                <tbody className="divide-y divide-[#F0EBE4]">
                  {Object.entries(product.details).map(([k, v]) => (
                    <tr key={k}>
                      <td className="py-2.5 text-[#8A7A6A] text-[11px] capitalize w-2/5 font-medium">{k}</td>
                      <td className="py-2.5 text-[#1A1410] text-[11px] font-semibold">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* À porter avec */}
          <div className="mt-6 bg-[#F7F1E8] border border-[#E5DDD0] p-4">
            <p className="text-[9px] font-bold text-[#1A1410] uppercase tracking-[0.2em] mb-3">À porter avec</p>
            <div className="flex flex-wrap gap-2">
              {product.styleWith.map((item) => (
                <span key={item} className="bg-white border border-[#E5DDD0] text-[#8A7A6A] text-[10px] px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ produit */}
          <div className="mt-8">
            <h3 className="text-[9px] font-bold text-[#1A1410] uppercase tracking-[0.2em] mb-3">Questions fréquentes</h3>
            <div className="border border-[#E5DDD0] divide-y divide-[#E5DDD0]">
              {productFaq.map((item, i) => (
                <FAQItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Produits similaires */}
      {similar.length > 0 && (
        <div className="mt-20 pt-12 border-t border-[#E5DDD0]">
          <div className="mb-8">
            <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#C08040] mb-2">De la même collection</p>
            <h2 className="text-xl font-black text-[#1A1410]">Vous aimerez aussi</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
            {similar.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}
