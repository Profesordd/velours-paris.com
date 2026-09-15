"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/lib/types";

const badgeStyle: Record<string, string> = {
  BESTSELLER: "bg-[#C08040] text-white",
  NOUVEAU:    "bg-white text-[#1A1410] border border-[#1A1410]",
  EXCLUSIF:   "bg-[#1A1410] text-white",
};

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const img2 = product.images[1] ?? product.images[0];

  return (
    <div className="group bg-white">
      <Link
        href={`/produit/${product.slug}`}
        className="block relative overflow-hidden bg-[#F7F1E8]"
        style={{ aspectRatio: "1/1" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {product.badge && (
          <span className={`absolute top-3 left-3 z-10 text-[9px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 ${badgeStyle[product.badge] ?? "bg-[#1A1410] text-white"}`}>
            {product.badge}
          </span>
        )}

        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-700 ${hovered ? "opacity-0 scale-[1.04]" : "opacity-100 scale-100"}`}
          unoptimized
        />
        <Image
          src={img2}
          alt={product.name}
          fill
          className={`object-cover absolute inset-0 transition-all duration-700 ${hovered ? "opacity-100 scale-[1.04]" : "opacity-0 scale-100"}`}
          unoptimized
        />

        <div className={`absolute inset-x-0 bottom-0 bg-[#1A1410]/85 py-3.5 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
          <span className="text-white text-[10px] font-semibold tracking-[0.18em] uppercase">Voir le produit</span>
          <ArrowRight size={12} className="text-white" />
        </div>
      </Link>

      <div className="pt-3 pb-5">
        <Link href={`/produit/${product.slug}`}>
          <p className="text-[#1A1410] text-[12px] font-medium leading-snug line-clamp-2 hover:opacity-60 transition-opacity tracking-wide">
            {product.name}
          </p>
        </Link>
        <p className="text-[#1A1410] text-[13px] font-semibold mt-1.5">{product.price.toFixed(2)} €</p>
      </div>
    </div>
  );
}
