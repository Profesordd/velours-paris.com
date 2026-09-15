import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1410] text-white mt-0">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 – Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-[13px] font-black tracking-[0.3em] uppercase text-white">
                Sellier Paris
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Maroquinerie française d'exception. Cuir pleine fleur, fabrication artisanale, pièces pensées pour durer une vie.
            </p>
            <div className="flex items-center gap-2">
              {["VISA", "MC", "CB"].map((c) => (
                <span key={c} className="border border-white/20 text-white/50 text-[10px] font-bold px-2 py-1">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 – Collections */}
          <div>
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em] mb-5">Collections</p>
            <ul className="space-y-3">
              {[
                { href: "/boutique?collection=ceintures", label: "Ceintures" },
                { href: "/boutique?collection=sacs", label: "Sacs" },
                { href: "/boutique?collection=petite-maroquinerie", label: "Petite Maroquinerie" },
                { href: "/boutique", label: "Toute la boutique" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors tracking-wide">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Infos & Contact */}
          <div>
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em] mb-5">Informations</p>
            <ul className="space-y-3 mb-6">
              {[
                { href: "/cgv", label: "Conditions générales de vente" },
                { href: "/mentions-legales", label: "Mentions légales" },
                { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
                { href: "/politique-de-retour", label: "Politique de retour" },
                { href: "/suivre-commande", label: "Suivi de commande" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors tracking-wide">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Mail size={13} />
              <a href="mailto:contact@sellier-paris.com" className="hover:text-white transition-colors">
                contact@sellier-paris.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6">
        <p className="text-center text-white/30 text-xs tracking-[0.1em]">
          © 2025 Sellier Paris — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
