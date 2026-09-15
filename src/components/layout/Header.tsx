"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const navItems = [
  { href: "/boutique", label: "Les Peignoirs" },
  { href: "/suivre-commande", label: "Suivi de commande" },
  { href: "/contact", label: "Contact" },
];

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex flex-col items-center group hover:opacity-75 transition-opacity">
      <span className={`${cormorant.className} text-[26px] font-light italic tracking-[0.08em] text-[#1C1C1C] leading-none`}>
        Velours
      </span>
      <span className="flex items-center gap-1.5 mt-[3px]">
        <span className="block h-px w-4 bg-[#B8963E]" />
        <span className="text-[7px] font-bold tracking-[0.55em] uppercase text-[#B8963E]">Paris</span>
        <span className="block h-px w-4 bg-[#B8963E]" />
      </span>
    </Link>
  );
}

export default function Header() {
  const { count, total } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-9 z-30 bg-[#FAFAF8] border-b border-[#E8E3DA]">
        <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/boutique"
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7670] hover:text-[#1C1C1C] transition-colors">
              Les Peignoirs
            </Link>
          </nav>

          <div className="flex justify-center">
            <Logo />
          </div>

          <div className="flex items-center justify-end gap-6">
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.slice(1).map((l) => (
                <Link key={l.label} href={l.href}
                  className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7670] hover:text-[#1C1C1C] transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>

            <button onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 text-[#1C1C1C] hover:opacity-60 transition-opacity">
              <div className="relative">
                <ShoppingCart size={18} strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#B8963E] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </div>
              {count > 0 && (
                <span className="text-[11px] font-medium hidden sm:block">{total.toFixed(2)} €</span>
              )}
            </button>

            <button className="lg:hidden text-[#1C1C1C]" onClick={() => setMenuOpen(true)}>
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{ animation: "slideInDown 0.3s ease forwards" }}
          className="fixed inset-0 z-[60] bg-[#FAFAF8] flex flex-col"
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#E8E3DA]" style={{ marginTop: "36px" }}>
            <Logo onClick={() => setMenuOpen(false)} />
            <button onClick={() => setMenuOpen(false)} className="text-[#1C1C1C]">
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 px-6 py-4 overflow-y-auto">
            {navItems.map((l) => (
              <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                className="block py-5 text-[15px] font-semibold tracking-[0.15em] uppercase text-[#1C1C1C] border-b border-[#E8E3DA] last:border-0">
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
