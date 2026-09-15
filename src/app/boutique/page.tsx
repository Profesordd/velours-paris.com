"use client";

import { useState, useMemo } from "react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const collections = [
  { key: "", label: "Tout" },
  { key: "homme", label: "Homme" },
  { key: "femme", label: "Femme" },
];

const sortOptions = [
  { key: "default", label: "Notre sélection" },
  { key: "price-asc", label: "Prix croissant" },
  { key: "price-desc", label: "Prix décroissant" },
];

function BoutiqueContent() {
  const searchParams = useSearchParams();
  const initialCollection = searchParams.get("collection") ?? "";

  const [activeCollection, setActiveCollection] = useState(initialCollection);
  const [sort, setSort] = useState("default");

  const filtered = useMemo(() => {
    let list = activeCollection
      ? products.filter((p) => p.collection === activeCollection)
      : products;
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCollection, sort]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8963E] mb-3">Peignoirs</p>
        <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-[#1C1C1C] leading-tight">
          La Boutique
        </h1>
      </div>

      {/* Filtres + tri */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E8E3DA]">
        <div className="flex flex-wrap gap-2">
          {collections.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveCollection(c.key)}
              className={`px-4 py-2 text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors ${
                activeCollection === c.key
                  ? "bg-[#1C1C1C] text-white"
                  : "border border-[#E8E3DA] text-[#7A7670] hover:border-[#1C1C1C] hover:text-[#1C1C1C]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-[#E8E3DA] text-[#7A7670] text-[10px] tracking-[0.1em] uppercase px-3 py-2 bg-[#FAFAF8] outline-none focus:border-[#1C1C1C] transition-colors"
        >
          {sortOptions.map((o) => (
            <option key={o.key} value={o.key}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* Résultats */}
      <p className="text-[10px] text-[#7A7670] tracking-[0.1em] uppercase mb-8">
        {filtered.length} produit{filtered.length > 1 ? "s" : ""}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}

export default function BoutiquePage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-6 py-14 text-[#7A7670] text-sm">Chargement…</div>}>
      <BoutiqueContent />
    </Suspense>
  );
}
