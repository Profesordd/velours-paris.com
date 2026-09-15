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
    q: "Comment choisir la taille de mon peignoir ?",
    a: "En cas de doute entre deux tailles, choisissez la plus grande pour plus de confort. S (36-38), M (40-42), L (44-46), XL (48-50). Les peignoirs femme en XS conviennent aux tailles 34-36.",
  },
  {
    q: "Puis-je retourner l'article s'il ne me convient pas ?",
    a: "Oui, vous disposez de 30 jours pour retourner votre article non porté. Les frais de retour sont entièrement pris en charge par Velours Paris.",
  },
  {
    q: "Comment entretenir mon peignoir ?",
    a: "Lavez votre peignoir à la température indiquée sur l'étiquette (40-60 °C selon le modèle). Séchage en machine possible pour les modèles éponge et waffle. Lavage délicat pour les modèles satin.",
  },
];

function FAQItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="border-b border-[#E8E3DA] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3.5 text-left hover:bg-[#F5F1E8] px-2 transition-colors"
      >
        <span className="text-[#1C1C1C] text-sm font-medium pr-4">{item.q}</span>
        <ChevronDown size={15} className={`text-[#7A7670] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        ref={contentRef}
        style={{
          height: open ? (contentRef.current?.scrollHeight ?? "auto") : 0,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <p className="px-2 pb-3.5 text-[#7A7670] text-sm leading-relaxed">{item.a}</p>
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
        <p className="text-[#7A7670] mb-4 text-sm">Produit introuvable.</p>
        <Link href="/boutique" className="text-[#1C1C1C] underline text-sm underline-offset-4">
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
    BESTSELLER: "bg-[#B8963E] text-white",
    NOUVEAU:    "bg-white text-[#1C1C1C] border border-[#1C1C1C]",
    EXCLUSIF:   "bg-[#1C1C1C] text-white",
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[10px] text-[#7A7670] mb-8 uppercase tracking-[0.1em]">
        <Link href="/" className="hover:text-[#1C1C1C] transition-colors">Accueil</Link>
        <ChevronRight size={10} />
        <Link href="/boutique" className="hover:text-[#1C1C1C] transition-colors">Boutique</Link>
        <ChevronRight size={10} />
        <span className="text-[#1C1C1C] font-medium line-clamp-1">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* ── Galerie ── */}
        <div className="space-y-2">
          <div className="relative bg-[#F5F1E8] overflow-hidden" style={{ aspectRatio: "1/1" }}>
            <Image
              src={product.images[activeImg]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              unoptimized
            />
            {product.badge && (
              <span className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 ${badgeStyle[product.badge] ?? "bg-[#1C1C1C] text-white"}`}>
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
                  className={`relative w-20 h-20 flex-shrink-0 overflow-hidden border-2 transition-colors ${activeImg === i ? "border-[#1C1C1C]" : "border-transparent hover:border-[#E8E3DA]"}`}
                >
                  <Image src={img} alt="" fill className="object-cover" unoptimized />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Infos ── */}
        <div>
          <p className="text-[9px] font-semibold text-[#B8963E] uppercase tracking-[0.25em] mb-2">{product.category}</p>
          <h1 className="text-xl md:text-2xl font-black text-[#1C1C1C] leading-snug mb-5">
            {product.name}
          </h1>

          <p className="text-3xl font-black text-[#1C1C1C] mb-7">{product.price.toFixed(2)} €</p>

          {/* Taille */}
          {product.sizes.length > 0 && product.sizes[0] !== "Unique" ? (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#1C1C1C]">
                  Taille{selectedSize && <span className="text-[#B8963E] ml-1.5">{selectedSize}</span>}
                </p>
                <button className="flex items-center gap-1 text-[10px] text-[#7A7670] hover:text-[#1C1C1C] transition-colors">
                  <Ruler size={11} /> Guide des tailles
                </button>
              </div>
              <SizeSelector sizes={product.sizes} selected={selectedSize} onSelect={setSelectedSize} />
              {sizeError && <p className="text-red-500 text-xs mt-2">Veuillez sélectionner une taille.</p>}
            </div>
          ) : (
            <div className="mb-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7A7670] border border-[#E8E3DA] px-3 py-1.5 inline-block">
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
                : "bg-[#1C1C1C] text-white hover:opacity-75"
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
              <div key={item.label} className="bg-[#F5F1E8] border border-[#E8E3DA] p-2.5 text-center">
                <div className="flex justify-center text-[#B8963E] mb-1">{item.icon}</div>
                <p className="text-[#7A7670] text-[9px] font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Tabs description / caractéristiques */}
          <div className="mt-8">
            <div className="flex border-b border-[#E8E3DA] mb-4">
              {(["description", "caracteristiques"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors ${
                    activeTab === tab
                      ? "text-[#1C1C1C] border-b-2 border-[#1C1C1C] -mb-px"
                      : "text-[#7A7670] hover:text-[#1C1C1C]"
                  }`}
                >
                  {tab === "description" ? "Description" : "Caractéristiques"}
                </button>
              ))}
            </div>
            {activeTab === "description" ? (
              <p className="text-[#7A7670] text-sm leading-relaxed">{product.description}</p>
            ) : (
              <table className="w-full text-sm">
                <tbody className="divide-y divide-[#F5F1E8]">
                  {Object.entries(product.details).map(([k, v]) => (
                    <tr key={k}>
                      <td className="py-2.5 text-[#7A7670] text-[11px] capitalize w-2/5 font-medium">{k}</td>
                      <td className="py-2.5 text-[#1C1C1C] text-[11px] font-semibold">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* FAQ produit */}
          <div className="mt-8">
            <h3 className="text-[9px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-3">Questions fréquentes</h3>
            <div className="border border-[#E8E3DA] divide-y divide-[#E8E3DA]">
              {productFaq.map((item, i) => (
                <FAQItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Produits similaires */}
      {similar.length > 0 && (
        <div className="mt-20 pt-12 border-t border-[#E8E3DA]">
          <div className="mb-8">
            <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8963E] mb-2">De la même collection</p>
            <h2 className="text-xl font-black text-[#1C1C1C]">Vous aimerez aussi</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
            {similar.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}
