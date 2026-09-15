"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StarRating from "./StarRating";

const reviews = [
  { name: "Céline L.", text: "Livraison super rapide, avec un bon suivi par mail. Le jean est impeccable et taille très bien.", rating: 5 },
  { name: "Laurent R.", text: "Produit conforme à la description, très bonne qualité et taille parfaite. Livraison rapide.", rating: 5 },
  { name: "Chloé M.", text: "La qualité est au rendez-vous, vraiment satisfaite. Livraison en un rien de temps !", rating: 5 },
  { name: "Laurent D.", text: "Livraison super rapide avec un bon suivi par mail et message. Merci beaucoup.", rating: 5 },
  { name: "Mathilde F.", text: "Je suis ravie de ma commande, le jean est top. Je recommande.", rating: 5 },
  { name: "Pascal C.", text: "Service client disponible, livraison rapide. Merci !", rating: 5 },
];

function ReviewCard({ r }: { r: (typeof reviews)[0] }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-5 flex flex-col gap-3 h-full">
      <StarRating rating={r.rating} />
      <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
      <p className="text-gray-900 font-semibold text-sm">{r.name}</p>
    </div>
  );
}

export default function ReviewsCarousel() {
  const [start, setStart] = useState(0);

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {reviews.map((r, i) => <ReviewCard key={i} r={r} />)}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${start * 100}%)` }}
          >
            {reviews.map((r, i) => (
              <div key={i} className="w-full flex-shrink-0 px-1">
                <ReviewCard r={r} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            disabled={start === 0}
            className="w-9 h-9 border border-gray-200 rounded flex items-center justify-center text-gray-500 hover:border-gray-900 disabled:opacity-30"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            onClick={() => setStart((s) => Math.min(reviews.length - 1, s + 1))}
            disabled={start >= reviews.length - 1}
            className="w-9 h-9 border border-gray-200 rounded flex items-center justify-center text-gray-500 hover:border-gray-900 disabled:opacity-30"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </>
  );
}
