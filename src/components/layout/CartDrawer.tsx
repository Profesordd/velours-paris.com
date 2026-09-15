"use client";

import { X, Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{ animation: "fadeInBg 0.2s ease forwards" }}
        className="fixed inset-0 bg-black/50 z-[55]"
      />
      <aside
        style={{ animation: "slideInRight 0.3s ease forwards" }}
        className="fixed inset-0 sm:left-auto sm:max-w-sm bg-white z-[60] flex flex-col shadow-2xl"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DDD0] flex-shrink-0">
          <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1A1410]">
            Mon panier
            {items.length > 0 && <span className="text-[#8A7A6A] font-normal ml-1">({items.length})</span>}
          </h2>
          <button onClick={onClose} className="text-[#8A7A6A] hover:text-[#1A1410] transition-colors">
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center text-center pt-16">
              <ShoppingCart size={36} strokeWidth={1} className="text-[#E5DDD0] mb-5" />
              <p className="text-[#8A7A6A] text-sm tracking-wide">Votre panier est vide</p>
              <button onClick={onClose}
                className="mt-5 text-[10px] font-semibold tracking-[0.15em] uppercase text-[#1A1410] underline underline-offset-4">
                Continuer mes achats
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.productSlug}-${item.size}`} className="flex gap-4 pb-5 border-b border-[#F0EBE4] last:border-0">
                <div className="relative w-16 h-16 bg-[#F7F1E8] overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#1A1410] text-[12px] font-medium line-clamp-2 leading-snug">{item.name}</p>
                  <p className="text-[#8A7A6A] text-[10px] tracking-wide uppercase mt-0.5">
                    {item.size !== "Unique" ? `Taille : ${item.size}` : "Taille unique"}
                  </p>
                  <p className="text-[#1A1410] font-bold text-sm mt-1">{item.price.toFixed(2)} €</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-[#E5DDD0]">
                      <button onClick={() => updateQuantity(item.productSlug, item.size, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#8A7A6A] hover:text-[#1A1410]">
                        <Minus size={10} />
                      </button>
                      <span className="w-6 text-center text-[12px] text-[#1A1410]">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.productSlug, item.size, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#8A7A6A] hover:text-[#1A1410]">
                        <Plus size={10} />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.productSlug, item.size)}
                      className="ml-auto text-[#E5DDD0] hover:text-red-400 transition-colors">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[#E5DDD0] space-y-3 bg-[#F7F1E8] flex-shrink-0">
            <div className="flex justify-between text-[11px] text-[#8A7A6A]">
              <span>Livraison</span>
              <span className="text-green-700 font-semibold">Gratuite</span>
            </div>
            <div className="flex justify-between font-black text-[#1A1410]">
              <span className="text-sm">Total</span>
              <span className="text-base">{total.toFixed(2)} €</span>
            </div>
            <Link href="/checkout" onClick={onClose}
              className="block w-full bg-[#1A1410] text-white text-center py-3.5 font-bold text-[10px] tracking-[0.2em] uppercase hover:opacity-75 transition-opacity">
              Passer la commande
            </Link>
            <Link href="/panier" onClick={onClose}
              className="block w-full text-center text-[10px] tracking-[0.15em] uppercase text-[#8A7A6A] hover:text-[#1A1410] transition-colors py-1">
              Voir le panier complet
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
