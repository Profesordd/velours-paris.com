"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingCart, ChevronRight, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function PanierPage() {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <ShoppingCart size={56} className="mx-auto text-gray-200 mb-5" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Votre panier est vide</h1>
        <p className="text-gray-400 text-sm mb-6">Découvrez notre collection de jeans homme.</p>
        <Link href="/boutique" className="inline-block bg-gray-900 text-white px-8 py-3 font-semibold text-sm rounded hover:bg-gray-700 transition-colors">
          Découvrir la boutique
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
        <span className="text-gray-700 font-medium">Panier</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-900 mb-8">Mon panier</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-3">
          {items.map((item) => (
            <div key={`${item.productSlug}-${item.size}`} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4">
              <div className="relative w-20 h-24 bg-gray-50 rounded overflow-hidden flex-shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
              </div>
              <div className="flex-1 min-w-0">
                <Link href={`/produit/${item.productSlug}`} className="text-gray-800 font-medium text-sm leading-snug hover:text-gray-600 line-clamp-2">
                  {item.name}
                </Link>
                <p className="text-gray-400 text-xs mt-1">Taille : <span className="text-gray-700">{item.size}</span></p>
                <p className="text-gray-900 font-bold mt-1">{item.price.toFixed(2)} €</p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                    <button onClick={() => updateQuantity(item.productSlug, item.size, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50">
                      <Minus size={11} />
                    </button>
                    <span className="w-8 text-center text-sm font-medium text-gray-900">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.productSlug, item.size, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50">
                      <Plus size={11} />
                    </button>
                  </div>
                  <span className="text-gray-900 font-bold text-sm ml-1">
                    {(item.price * item.quantity).toFixed(2)} €
                  </span>
                  <button onClick={() => removeItem(item.productSlug, item.size)} className="ml-auto text-gray-300 hover:text-red-400 transition-colors">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <Link href="/boutique" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors mt-2">
            ← Continuer mes achats
          </Link>
        </div>

        {/* Summary */}
        <div>
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-5 sticky top-28">
            <h2 className="font-bold text-gray-900 mb-4">Récapitulatif</h2>

            <div className="space-y-2.5 mb-4 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Sous-total</span>
                <span>{total.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span className="flex items-center gap-1.5"><Truck size={13} /> Livraison</span>
                <span className="text-green-600 font-semibold">Gratuite</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-3 mb-4">
              <div className="flex justify-between font-bold text-gray-900">
                <span>Total</span>
                <span className="text-xl">{total.toFixed(2)} €</span>
              </div>
            </div>

            <Link href="/checkout" className="block w-full bg-gray-900 text-white text-center py-3.5 font-semibold text-sm rounded hover:bg-gray-700 transition-colors mb-2">
              Passer la commande
            </Link>
            <p className="text-center text-xs text-gray-400 mt-2">Paiement 100% sécurisé</p>
          </div>
        </div>
      </div>
    </div>
  );
}
