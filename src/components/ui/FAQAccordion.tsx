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
    question: "Comment choisir la bonne taille de peignoir ?",
    answer: "Nos peignoirs sont disponibles en XS, S, M, L et XL (XS/S/M/L pour la collection femme). En cas de doute, choisissez la taille supérieure pour plus de confort. Les tailles sont standards européennes : S (36-38), M (40-42), L (44-46), XL (48-50).",
  },
  {
    question: "Comment laver mon peignoir ?",
    answer: "Cela dépend du modèle. Les peignoirs en éponge et coton se lavent à 60 °C en machine. Les modèles velours sont recommandés à 30 °C. Le satin ivoire est à laver en cycle délicat à 30 °C ou au nettoyage à sec. Consultez l'étiquette de votre peignoir pour les instructions précises.",
  },
  {
    question: "Puis-je retourner un article ?",
    answer: "Oui, vous disposez de 30 jours pour nous retourner un article non porté et dans son emballage d'origine. Les frais de retour sont entièrement pris en charge par Velours Paris. Contactez-nous à contact@velours-paris.com pour initier un retour.",
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
    <div className="border-b border-[#E8E3DA] last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#F5F1E8] transition-colors cursor-pointer"
      >
        <span className="text-[#1C1C1C] text-sm font-semibold pr-4">{faq.question}</span>
        <ChevronDown
          size={15}
          className="text-[#7A7670] flex-shrink-0 transition-transform duration-200"
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
        <p className="px-5 pb-5 text-[#7A7670] text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="border border-[#E8E3DA] overflow-hidden">
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
