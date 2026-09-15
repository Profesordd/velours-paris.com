import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white mt-0">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-[13px] font-black tracking-[0.3em] uppercase text-white">
                Velours Paris
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Peignoirs d'exception fabriqués en Europe. Coton éponge, velours, nid d'abeille — la douceur du luxe au quotidien.
            </p>
            <div className="flex items-center gap-2">
              {["VISA", "MC", "CB"].map((c) => (
                <span key={c} className="border border-white/20 text-white/50 text-[10px] font-bold px-2 py-1">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em] mb-5">Collection</p>
            <ul className="space-y-3">
              {[
                { href: "/boutique", label: "Les Peignoirs" },
                { href: "/boutique", label: "Nouveautés" },
                { href: "/boutique", label: "Bestsellers" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors tracking-wide">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
              <a href="mailto:contact@velours-paris.com" className="hover:text-white transition-colors">
                contact@velours-paris.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6">
        <p className="text-center text-white/30 text-xs tracking-[0.1em]">
          © 2026 Velours Paris — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
