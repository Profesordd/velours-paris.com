"use client";

import { useState, useMemo } from "react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";

const sortOptions = [
  { key: "default", label: "Notre sélection" },
  { key: "price-asc", label: "Prix croissant" },
  { key: "price-desc", label: "Prix décroissant" },
];

export default function BoutiquePage() {
  const [sort, setSort] = useState("default");

  const sorted = useMemo(() => {
    const list = [...products];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [sort]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      <div className="mb-10">
        <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8963E] mb-3">Collection</p>
        <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-[#1C1C1C] leading-tight">
          Les Peignoirs
        </h1>
      </div>

      <div className="flex items-center justify-between mb-10 pb-6 border-b border-[#E8E3DA]">
        <p className="text-[10px] text-[#7A7670] tracking-[0.1em] uppercase">
          {sorted.length} produits
        </p>
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
        {sorted.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
