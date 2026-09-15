import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = { title: "Mentions Légales — Velours Paris" };

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-1.5 text-[10px] text-[#7A7670] mb-8 uppercase tracking-[0.1em]">
        <Link href="/" className="hover:text-[#1C1C1C] transition-colors">Accueil</Link>
        <ChevronRight size={10} />
        <span className="text-[#1C1C1C] font-medium">Mentions légales</span>
      </nav>

      <h1 className="text-[clamp(1.5rem,3vw,2rem)] font-black text-[#1C1C1C] mb-10">
        Mentions Légales
      </h1>

      <div className="space-y-10 text-sm text-[#7A7670] leading-relaxed">

        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E8E3DA]">
            Éditeur du site
          </h2>
          <div className="space-y-1.5">
            <p><span className="font-semibold text-[#1C1C1C]">Raison sociale :</span> Velours Paris</p>
            <p><span className="font-semibold text-[#1C1C1C]">Forme juridique :</span> SASU</p>
          </div>
        </section>

        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E8E3DA]">
            Contact
          </h2>
          <p>
            Email :{" "}
            <a href="mailto:contact@velours-paris.com" className="text-[#B8963E] hover:underline underline-offset-4">
              contact@velours-paris.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E8E3DA]">
            Hébergement
          </h2>
          <p>
            Ce site est hébergé par <strong className="text-[#1C1C1C]">Vercel Inc.</strong><br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br />
            <a href="https://vercel.com" className="text-[#B8963E] hover:underline underline-offset-4">vercel.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E8E3DA]">
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes) sont la propriété exclusive
            de Velours Paris et sont protégés par les lois françaises et internationales relatives
            à la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
          </p>
        </section>

        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E8E3DA]">
            Limitation de responsabilité
          </h2>
          <p>
            Velours Paris s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur
            ce site, mais ne peut garantir leur exhaustivité ni leur exactitude à tout moment. La société se réserve le
            droit de modifier les contenus à tout moment et sans préavis.
          </p>
        </section>

        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E8E3DA]">
            Données personnelles
          </h2>
          <p>
            Pour toute question relative au traitement de vos données personnelles, veuillez consulter notre{" "}
            <Link href="/politique-de-confidentialite" className="text-[#B8963E] hover:underline underline-offset-4">
              politique de confidentialité
            </Link>
            . Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et d'effacement de vos données
            en contactant : <a href="mailto:contact@velours-paris.com" className="text-[#B8963E] hover:underline underline-offset-4">contact@velours-paris.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#E8E3DA]">
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
