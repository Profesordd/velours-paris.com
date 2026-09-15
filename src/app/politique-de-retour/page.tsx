import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = { title: "Politique de Retour — Sellier Paris" };

export default function PolitiqueRetourPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-700">Accueil</Link>
        <ChevronRight size={11} />
        <span className="text-gray-700 font-medium">Politique de retour</span>
      </nav>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Politique de Retour</h1>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-8">
        <p className="font-bold text-gray-900 mb-1">30 jours pour changer d'avis</p>
        <p className="text-sm text-gray-600">Garantie satisfait ou remboursé, sans justification nécessaire.</p>
      </div>
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-2">Conditions</h2>
          <ul className="space-y-2">
            {["Article non porté, non lavé avec étiquettes", "Retour dans les 30 jours suivant la réception", "Emballage original conseillé"].map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-1.5">Frais de retour</h2>
          <p>Les frais de retour sont entièrement pris en charge par Sellier Paris. Vous ne payez rien.</p>
        </section>
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-1.5">Remboursement ou échange</h2>
          <p>Après réception et vérification, vous choisissez entre un remboursement intégral (5-7 jours ouvrés) ou un échange.</p>
        </section>
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-1.5">Comment initier un retour ?</h2>
          <p>Contactez-nous à <a href="mailto:contact@sellier-paris.com" className="text-blue-600 hover:underline">contact@sellier-paris.com</a> avec votre numéro de commande. Nous vous envoyons les instructions par email.</p>
        </section>
      </div>
    </div>
  );
}
