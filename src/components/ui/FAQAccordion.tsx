"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quels sont vos délais de livraison ?",
    answer: "Nous livrons en 5 à 7 jours ouvrés en France métropolitaine via La Poste Colissimo. Vous recevrez votre numéro de suivi par email dès l'expédition.",
  },
  {
    question: "La livraison est-elle gratuite ?",
    answer: "Oui, la livraison est entièrement gratuite en France pour toutes les commandes, sans minimum d'achat.",
  },
  {
    question: "Comment choisir la taille de ma ceinture ?",
    answer: "La taille d'une ceinture correspond à la longueur totale du cuir (de l'embout à la boucle). Pour connaître votre taille, mesurez le tour de votre taille et ajoutez 15 à 20 cm. Exemple : tour de taille 80 cm → ceinture taille 95 ou 100.",
  },
  {
    question: "Puis-je retourner un article ?",
    answer: "Oui, vous disposez de 30 jours pour nous retourner un article non porté et dans son emballage d'origine. Les frais de retour sont entièrement pris en charge par Sellier Paris. Contactez-nous à contact@sellier-paris.com pour initier un retour.",
  },
  {
    question: "Comment entretenir mon cuir ?",
    answer: "Appliquez une crème nourrissante incolore tous les 3 à 6 mois selon l'usage. Évitez l'eau stagnante et séchez à l'air naturellement si votre pièce est mouillée. Ne pas utiliser de cirage de couleur sur le cuir naturel.",
  },
  {
    question: "Les paiements sont-ils sécurisés ?",
    answer: "Oui, tous les paiements sont sécurisés par cryptage SSL 256 bits. Nous acceptons Visa, Mastercard et CB. Vos données bancaires ne sont jamais stockées sur nos serveurs.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-[#E5DDD0] last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#F7F1E8] transition-colors cursor-pointer"
      >
        <span className="text-[#1A1410] text-sm font-semibold pr-4">{faq.question}</span>
        <ChevronDown
          size={15}
          className="text-[#8A7A6A] flex-shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? contentRef.current?.scrollHeight ?? "auto" : 0,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <p className="px-5 pb-5 text-[#8A7A6A] text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="border border-[#E5DDD0] overflow-hidden">
      {faqs.map((faq, i) => (
        <FAQItem
          key={i}
          faq={faq}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}
