import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = { title: "Politique de Confidentialité — Sellier Paris" };

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-700">Accueil</Link>
        <ChevronRight size={11} />
        <span className="text-gray-700 font-medium">Politique de confidentialité</span>
      </nav>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-1.5">Données collectées</h2>
          <p>Lors d'une commande, nous collectons : nom, prénom, email, téléphone, adresse postale. Ces données sont nécessaires au traitement et à la livraison.</p>
        </section>
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-1.5">Utilisation des données</h2>
          <p>Vos données sont utilisées uniquement pour le traitement de votre commande, le suivi de livraison et le respect de nos obligations légales.</p>
        </section>
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-1.5">Partage des données</h2>
          <p>Vos données ne sont jamais partagées avec des tiers à des fins commerciales. Elles peuvent être transmises à nos prestataires de livraison uniquement.</p>
        </section>
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-1.5">Vos droits (RGPD)</h2>
          <p>Vous disposez d'un droit d'accès, de rectification et d'effacement de vos données. Pour exercer ces droits : <a href="mailto:contact@sellier-paris.com" className="text-blue-600 hover:underline">contact@sellier-paris.com</a></p>
        </section>
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-1.5">Cookies</h2>
          <p>Ce site utilise uniquement des cookies techniques nécessaires au fonctionnement du panier. Aucun cookie publicitaire n'est utilisé.</p>
        </section>
      </div>
    </div>
  );
}
