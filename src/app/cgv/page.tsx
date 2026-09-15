import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = { title: "CGV — Velours Paris" };

const articles = [
  {
    title: "1. Vendeur",
    text: "Le présent site est exploité par la société Velours Paris. Contact : contact@velours-paris.com",
  },
  {
    title: "2. Prix",
    text: "Tous les prix sont indiqués en euros TTC. Velours Paris se réserve le droit de modifier ses prix à tout moment. Les produits sont facturés au tarif en vigueur lors de la validation de la commande.",
  },
  {
    title: "3. Commande",
    text: "Toute commande passée sur le site vaut acceptation des présentes CGV. Vous recevrez un email de confirmation dès validation de votre commande.",
  },
  {
    title: "4. Paiement",
    text: "Le paiement s'effectue par carte bancaire (CB, Visa, Mastercard) via un système sécurisé SSL 256 bits. Vos données bancaires ne sont jamais stockées sur nos serveurs.",
  },
  {
    title: "5. Livraison",
    text: "La livraison est gratuite en France métropolitaine, sans minimum d'achat. Le délai est de 5 à 7 jours ouvrés via Colissimo. Vous recevrez votre numéro de suivi par email dès expédition.",
  },
  {
    title: "6. Droit de rétractation",
    text: "Conformément à l'article L221-18 du Code de la consommation, vous disposez d'un délai de 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation, sans avoir à justifier de motifs.",
  },
  {
    title: "7. Retours & remboursements",
    text: "Velours Paris offre une garantie satisfait ou remboursé de 30 jours. Les frais de retour sont pris en charge par nos soins. Contactez-nous à contact@velours-paris.com pour initier un retour. Le remboursement est effectué sous 5 à 7 jours ouvrés après réception de l'article.",
  },
  {
    title: "8. Garantie légale",
    text: "Nos produits bénéficient des garanties légales de conformité (L217-4 et suivants du Code de la consommation) et contre les vices cachés (articles 1641 et suivants du Code civil).",
  },
  {
    title: "9. Service client",
    text: "Notre service client est disponible 7j/7 à l'adresse contact@velours-paris.com. Réponse garantie sous 24h ouvrées.",
  },
  {
    title: "10. Droit applicable",
    text: "Les présentes CGV sont soumises au droit français. Tout litige relatif à leur interprétation ou exécution sera soumis aux tribunaux compétents français.",
  },
];

export default function CGVPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-1.5 text-[10px] text-[#7A7670] mb-8 uppercase tracking-[0.1em]">
        <Link href="/" className="hover:text-[#1C1C1C] transition-colors">Accueil</Link>
        <ChevronRight size={10} />
        <span className="text-[#1C1C1C] font-medium">CGV</span>
      </nav>

      <h1 className="text-[clamp(1.5rem,3vw,2rem)] font-black text-[#1C1C1C] mb-10">
        Conditions Générales de Vente
      </h1>

      <div className="space-y-8 text-sm text-[#7A7670] leading-relaxed">
        {articles.map(({ title, text }) => (
          <section key={title}>
            <h2 className="text-[11px] font-bold text-[#1C1C1C] uppercase tracking-[0.2em] mb-3 pb-2 border-b border-[#E8E3DA]">
              {title}
            </h2>
            <p>{text}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
