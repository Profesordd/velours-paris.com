import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = { title: "Politique de Retour — Velours Paris" };

export default function PolitiqueRetourPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-1.5 text-[10px] text-[#7A7670] mb-8 uppercase tracking-[0.1em]">
        <Link href="/" className="hover:text-[#1C1C1C] transition-colors">Accueil</Link>
        <ChevronRight size={10} />
        <span className="text-[#1C1C1C] font-medium">Politique de retour</span>
      </nav>
      <h1 className="text-[clamp(1.5rem,3vw,2rem)] font-black text-[#1C1C1C] mb-10">
        Politique de Retour
      </h1>
      <div className="bg-[#F5F1E8] border border-[#E8E3DA] p-6 mb-10">
        <p className="font-bold text-[#1C1C1C] mb-1">30 jours pour changer d'avis</p>
        <p className="text-sm text-[#7A7670]">Garantie satisfait ou remboursé, sans justification nécessaire.</p>
      </div>
      <div className="space-y-8 text-sm text-[#7A7670] leading-relaxed">
        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-3 pb-2 border-b border-[#E8E3DA]">
            Conditions
          </h2>
          <ul className="space-y-2">
            {["Article non porté, non lavé avec étiquettes", "Retour dans les 30 jours suivant la réception", "Emballage original conseillé"].map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="text-[#B8963E] font-bold mt-0.5">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-3 pb-2 border-b border-[#E8E3DA]">
            Frais de retour
          </h2>
          <p>Les frais de retour sont entièrement pris en charge par Velours Paris. Vous ne payez rien.</p>
        </section>
        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-3 pb-2 border-b border-[#E8E3DA]">
            Remboursement ou échange
          </h2>
          <p>Après réception et vérification, vous choisissez entre un remboursement intégral (5–7 jours ouvrés) ou un échange.</p>
        </section>
        <section>
          <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-3 pb-2 border-b border-[#E8E3DA]">
            Comment initier un retour ?
          </h2>
          <p>
            Contactez-nous à{" "}
            <a href="mailto:contact@velours-paris.com" className="text-[#B8963E] hover:underline underline-offset-4">
              contact@velours-paris.com
            </a>{" "}
            avec votre numéro de commande. Nous vous envoyons les instructions par email.
          </p>
        </section>
      </div>
    </div>
  );
}
