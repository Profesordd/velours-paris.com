import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = { title: "Mentions Légales — Sellier Paris" };

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-1.5 text-[10px] text-[#8A7A6A] mb-8 uppercase tracking-[0.1em]">
        <Link href="/" className="hover:text-[#1A1410] transition-colors">Accueil</Link>
        <ChevronRight size={10} />
        <span className="text-[#1A1410] font-medium">Mentions légales</span>
      </nav>

      <h1 className="text-[clamp(1.5rem,3vw,2rem)] font-black text-[#1A1410] mb-10">
        Mentions Légales
      </h1>

      <div className="space-y-10 text-sm text-[#8A7A6A] leading-relaxed">

        {/* ── Éditeur ───────────────────────────────────────────── */}
        <section>
          <h2 className="text-[11px] font-bold text-[#1A1410] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E5DDD0]">
            Éditeur du site
          </h2>
          <div className="space-y-1.5">
            <p><span className="font-semibold text-[#1A1410]">Raison sociale :</span> LOUIS DAVID-BATY SASU</p>
            <p><span className="font-semibold text-[#1A1410]">Forme juridique :</span> SASU — Société par Actions Simplifiée Unipersonnelle</p>
            <p><span className="font-semibold text-[#1A1410]">Capital social :</span> 100,00 €</p>
            <p><span className="font-semibold text-[#1A1410]">Siège social :</span> 10 rue Jean Jaurès, 86000 Poitiers</p>
            <p><span className="font-semibold text-[#1A1410]">SIREN :</span> 108 220 310</p>
            <p><span className="font-semibold text-[#1A1410]">SIRET (siège) :</span> 108 220 310 00016</p>
            <p><span className="font-semibold text-[#1A1410]">N° RCS :</span> 108 220 310 R.C.S. Poitiers</p>
            <p><span className="font-semibold text-[#1A1410]">N° TVA intracommunautaire :</span> FR02108220310</p>
            <p><span className="font-semibold text-[#1A1410]">Code NAF / APE :</span> 47.91B — Vente à distance sur catalogue spécialisé</p>
            <p><span className="font-semibold text-[#1A1410]">Immatriculation RCS :</span> Inscrit au greffe de Poitiers le 30/07/2026</p>
            <p><span className="font-semibold text-[#1A1410]">Dirigeant :</span> David-Baty Louis</p>
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────────── */}
        <section>
          <h2 className="text-[11px] font-bold text-[#1A1410] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E5DDD0]">
            Contact
          </h2>
          <p>
            Email :{" "}
            <a href="mailto:contact@sellier-paris.com" className="text-[#C08040] hover:underline underline-offset-4">
              contact@sellier-paris.com
            </a>
          </p>
        </section>

        {/* ── Hébergement ───────────────────────────────────────── */}
        <section>
          <h2 className="text-[11px] font-bold text-[#1A1410] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E5DDD0]">
            Hébergement
          </h2>
          <p>
            Ce site est hébergé par <strong className="text-[#1A1410]">Vercel Inc.</strong><br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br />
            <a href="https://vercel.com" className="text-[#C08040] hover:underline underline-offset-4">vercel.com</a>
          </p>
        </section>

        {/* ── Propriété intellectuelle ───────────────────────────── */}
        <section>
          <h2 className="text-[11px] font-bold text-[#1A1410] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E5DDD0]">
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes) sont la propriété exclusive
            de la société LOUIS DAVID-BATY SASU et sont protégés par les lois françaises et internationales relatives
            à la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
          </p>
        </section>

        {/* ── Responsabilité ────────────────────────────────────── */}
        <section>
          <h2 className="text-[11px] font-bold text-[#1A1410] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E5DDD0]">
            Limitation de responsabilité
          </h2>
          <p>
            LOUIS DAVID-BATY SASU s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur
            ce site, mais ne peut garantir leur exhaustivité ni leur exactitude à tout moment. La société se réserve le
            droit de modifier les contenus à tout moment et sans préavis.
          </p>
        </section>

        {/* ── Données personnelles ──────────────────────────────── */}
        <section>
          <h2 className="text-[11px] font-bold text-[#1A1410] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E5DDD0]">
            Données personnelles
          </h2>
          <p>
            Pour toute question relative au traitement de vos données personnelles, veuillez consulter notre{" "}
            <Link href="/politique-de-confidentialite" className="text-[#C08040] hover:underline underline-offset-4">
              politique de confidentialité
            </Link>
            . Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et d'effacement de vos données
            en contactant : <a href="mailto:contact@sellier-paris.com" className="text-[#C08040] hover:underline underline-offset-4">contact@sellier-paris.com</a>
          </p>
        </section>

        {/* ── Droit applicable ──────────────────────────────────── */}
        <section>
          <h2 className="text-[11px] font-bold text-[#1A1410] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E5DDD0]">
            Droit applicable
          </h2>
          <p>
            Le présent site et ses mentions légales sont soumis au droit français. Tout litige relatif à l'utilisation
            du site sera soumis à la compétence exclusive des tribunaux français.
          </p>
        </section>

      </div>
    </div>
  );
}
