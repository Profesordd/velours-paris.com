"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

const navItems = [
  { href: "/boutique", label: "Boutique" },
  { href: "/boutique?collection=ceintures", label: "Ceintures" },
  { href: "/boutique?collection=sacs", label: "Sacs" },
  { href: "/suivre-commande", label: "Suivi de commande" },
  { href: "/contact", label: "Contact" },
];

const navLeft = navItems.slice(0, 3);
const navRight = navItems.slice(3);

export default function Header() {
  const { count, total } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-9 z-30 bg-white border-b border-[#E5DDD0]">
        <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
          {/* Nav gauche — desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLeft.map((l) => (
              <Link key={l.label} href={l.href}
                className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#8A7A6A] hover:text-[#1A1410] transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/" className="text-[13px] font-black tracking-[0.3em] uppercase text-[#1A1410] hover:opacity-70 transition-opacity">
              Sellier Paris
            </Link>
          </div>

          {/* Droite */}
          <div className="flex items-center justify-end gap-6">
            <nav className="hidden lg:flex items-center gap-7">
              {navRight.map((l) => (
                <Link key={l.label} href={l.href}
                  className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#8A7A6A] hover:text-[#1A1410] transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Panier */}
            <button onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 text-[#1A1410] hover:opacity-60 transition-opacity">
              <div className="relative">
                <ShoppingCart size={18} strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#1A1410] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </div>
              {count > 0 && (
                <span className="text-[11px] font-medium hidden sm:block">{total.toFixed(2)} €</span>
              )}
            </button>

            {/* Burger */}
            <button className="lg:hidden text-[#1A1410]" onClick={() => setMenuOpen(true)}>
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile — plein écran */}
      {menuOpen && (
        <div
          style={{ animation: "slideInDown 0.3s ease forwards" }}
          className="fixed inset-0 z-[60] bg-white flex flex-col"
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#E5DDD0]" style={{ marginTop: "36px" }}>
            <Link href="/" className="text-[13px] font-black tracking-[0.3em] uppercase text-[#1A1410]"
              onClick={() => setMenuOpen(false)}>
              Sellier Paris
            </Link>
            <button onClick={() => setMenuOpen(false)} className="text-[#1A1410]">
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 px-6 py-4 overflow-y-auto">
            {navItems.map((l) => (
              <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                className="block py-5 text-[15px] font-semibold tracking-[0.15em] uppercase text-[#1A1410] border-b border-[#F0EBE4] last:border-0">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
