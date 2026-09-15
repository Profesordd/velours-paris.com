import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = { title: "Politique de Confidentialité — Velours Paris" };

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-1.5 text-[10px] text-[#7A7670] mb-8 uppercase tracking-[0.1em]">
        <Link href="/" className="hover:text-[#1C1C1C] transition-colors">Accueil</Link>
        <ChevronRight size={10} />
        <span className="text-[#1C1C1C] font-medium">Politique de confidentialité</span>
      </nav>
      <h1 className="text-[clamp(1.5rem,3vw,2rem)] font-black text-[#1C1C1C] mb-10">
        Politique de Confidentialité
      </h1>
      <div className="space-y-8 text-sm text-[#7A7670] leading-relaxed">
        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-3 pb-2 border-b border-[#E8E3DA]">
            Données collectées
          </h2>
          <p>Lors d'une commande, nous collectons : nom, prénom, email, téléphone, adresse postale. Ces données sont nécessaires au traitement et à la livraison.</p>
        </section>
        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-3 pb-2 border-b border-[#E8E3DA]">
            Utilisation des données
          </h2>
          <p>Vos données sont utilisées uniquement pour le traitement de votre commande, le suivi de livraison et le respect de nos obligations légales.</p>
        </section>
        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-3 pb-2 border-b border-[#E8E3DA]">
            Partage des données
          </h2>
          <p>Vos données ne sont jamais partagées avec des tiers à des fins commerciales. Elles peuvent être transmises à nos prestataires de livraison uniquement.</p>
        </section>
        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-3 pb-2 border-b border-[#E8E3DA]">
            Vos droits (RGPD)
          </h2>
          <p>
            Vous disposez d'un droit d'accès, de rectification et d'effacement de vos données. Pour exercer ces droits :{" "}
            <a href="mailto:contact@velours-paris.com" className="text-[#B8963E] hover:underline underline-offset-4">
              contact@velours-paris.com
            </a>
          </p>
        </section>
        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-3 pb-2 border-b border-[#E8E3DA]">
            Cookies
          </h2>
          <p>Ce site utilise uniquement des cookies techniques nécessaires au fonctionnement du panier. Aucun cookie publicitaire n'est utilisé.</p>
        </section>
      </div>
    </div>
  );
}
