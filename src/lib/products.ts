import { Product } from "./types";

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

// Verified free CDN IDs — no brand logos
const R1  = U("1623120594168-a6d35474043b"); // man in bathrobe with drink
const R2  = U("1770294759101-fae1377d4d34"); // woman in white bathrobe wooden wall
const R3  = U("1704428381445-dc61b037cfd2"); // white robe hanging on wall
const R4  = U("1661023178485-95a0654b62aa"); // pair of white robes on wall
const R5  = U("1710378439817-6159c79bda03"); // robe hanging hotel room
const R6  = U("1766727923624-2e8eede5aa8c"); // pink and blue bathrobes with towels
const R7  = U("1787724778628-ad5eb4e725a8"); // woman drying hair in bathrobe
const R8  = U("1535272126276-63decfb8c4d7"); // woman white bathrobe on terrace
const R9  = U("1609535895148-cf9f5c446290"); // smiling woman bathrobe with mug
const R10 = U("1704428381481-92bf396b24bd"); // bathroom two robes
const R11 = U("1609535904959-aaa9d01fb5a4"); // woman in white sitting in chair
const R12 = U("1643916205111-0fd2357e08ed"); // woman drinking wine by window

export const products: Product[] = [
  // ── HOMME ───────────────────────────────────────────────────────
  {
    slug: "peignoir-eponge-classique-homme",
    name: "Peignoir Éponge Classique",
    price: 79,
    category: "Peignoir",
    collection: "homme",
    badge: "BESTSELLER",
    sizes: ["S", "M", "L", "XL"],
    images: [R1, R5],
    description:
      "Notre peignoir éponge 100 % coton égyptien, coupé ample pour un confort maximal après la douche ou le bain. Épais, absorbant, pensé pour les hommes qui s'accordent un vrai moment de détente.",
    details: {
      Matière: "100 % coton éponge égyptien 500 g/m²",
      Coupe: "Coupe ample, col châle, ceinture réglable",
      Entretien: "Lavable à 60 °C, séchage en machine",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Blanc naturel, Écru, Gris ardoise",
    },
    styleWith: ["peignoir-waffle-homme", "peignoir-velours-nuit-homme"],
  },
  {
    slug: "peignoir-waffle-homme",
    name: "Peignoir Waffle Premium",
    price: 89,
    category: "Peignoir",
    collection: "homme",
    badge: "NOUVEAU",
    sizes: ["S", "M", "L", "XL"],
    images: [R10, R4],
    description:
      "Le tissu waffle (nid d'abeille) offre légèreté et excellente absorption. Ce peignoir sèche rapidement et reste frais : parfait pour l'été ou le sport. Finitions double surpiqûre, poches plaquées.",
    details: {
      Matière: "100 % coton piqué waffle 380 g/m²",
      Coupe: "Col kimono, ceinture nouée, longueur mi-cuisse",
      Entretien: "Lavable à 40 °C",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Blanc, Blanc cassé, Navy",
    },
    styleWith: ["peignoir-eponge-classique-homme", "peignoir-kimono-homme"],
  },
  {
    slug: "peignoir-velours-nuit-homme",
    name: "Peignoir Velours Nuit",
    price: 99,
    category: "Peignoir",
    collection: "homme",
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    images: [R3, R6],
    description:
      "Le velours côtelé le plus doux du marché. Ce peignoir est conçu pour une soirée au coin du feu autant que pour une routine spa à domicile. Tombé parfait, chaleur enveloppante.",
    details: {
      Matière: "80 % coton, 20 % polyester velours 450 g/m²",
      Coupe: "Col châle, deux poches profondes, longueur mollet",
      Entretien: "Lavable à 30 °C, repassage doux",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Charcoal, Bordeaux nuit, Forêt",
    },
    styleWith: ["peignoir-eponge-classique-homme", "peignoir-waffle-homme"],
  },
  {
    slug: "peignoir-kimono-homme",
    name: "Peignoir Kimono Lin",
    price: 109,
    category: "Peignoir",
    collection: "homme",
    badge: "EXCLUSIF",
    sizes: ["S", "M", "L", "XL"],
    images: [R12, R1],
    description:
      "Un kimono homme en lin et coton, inspiré des onsen japonais. Léger, aéré, avec une tombée élégante. La pièce pour ceux qui font du peignoir un accessoire de style à part entière.",
    details: {
      Matière: "55 % lin, 45 % coton 280 g/m²",
      Coupe: "Col kimono croisé, ceinture longue, longueur genou",
      Entretien: "Lavable à 40 °C, légèrement froissé est naturel",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Lin naturel, Blanc sable, Gris fumé",
    },
    styleWith: ["peignoir-velours-nuit-homme", "peignoir-waffle-homme"],
  },

  // ── FEMME ────────────────────────────────────────────────────────
  {
    slug: "peignoir-coton-douceur-femme",
    name: "Peignoir Coton Douceur",
    price: 79,
    category: "Peignoir",
    collection: "femme",
    badge: "BESTSELLER",
    sizes: ["XS", "S", "M", "L"],
    images: [R9, R8],
    description:
      "Le peignoir coton préféré de nos clientes. Doux au toucher, léger, avec une coupe féminine qui flatte la silhouette. Doublé éponge à l'intérieur pour rester absorbant.",
    details: {
      Matière: "100 % coton peigné 420 g/m²",
      Coupe: "Col châle, ceinture réglable, longueur genou",
      Entretien: "Lavable à 60 °C, séchage machine",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Blanc pur, Rose poudré, Sauge",
    },
    styleWith: ["peignoir-satin-ivoire-femme", "peignoir-court-coton-femme"],
  },
  {
    slug: "peignoir-satin-ivoire-femme",
    name: "Peignoir Satin Ivoire",
    price: 119,
    category: "Peignoir",
    collection: "femme",
    badge: "EXCLUSIF",
    sizes: ["XS", "S", "M", "L"],
    images: [R2, R11],
    description:
      "Notre pièce la plus précieuse. Un satin lustré aux reflets ivoire, avec une tombée fluide et une légèreté absolue. Pensé pour les matins de luxe, les voyages de charme, les mariages.",
    details: {
      Matière: "100 % satin de soie et modal",
      Coupe: "Col V, ceinture fine lacée, longueur mi-mollet",
      Entretien: "Lavage délicat à 30 °C ou nettoyage à sec",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Ivoire, Champagne, Blush rosé",
    },
    styleWith: ["peignoir-coton-douceur-femme", "peignoir-long-velours-femme"],
  },
  {
    slug: "peignoir-court-coton-femme",
    name: "Peignoir Court Coton",
    price: 69,
    category: "Peignoir",
    collection: "femme",
    badge: "NOUVEAU",
    sizes: ["XS", "S", "M", "L"],
    images: [R7, R9],
    description:
      "Court, pratique, agréable à porter toute la journée. Le peignoir court parfait pour le quotidien : après la douche, au petit-déjeuner, en week-end. 100 % coton éponge ultra-doux.",
    details: {
      Matière: "100 % coton éponge 380 g/m²",
      Coupe: "Col kimono, ceinture nouée, longueur hanche",
      Entretien: "Lavable à 60 °C",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Blanc, Écru, Bleu lavande",
    },
    styleWith: ["peignoir-coton-douceur-femme", "peignoir-satin-ivoire-femme"],
  },
  {
    slug: "peignoir-long-velours-femme",
    name: "Peignoir Long Velours",
    price: 129,
    category: "Peignoir",
    collection: "femme",
    badge: null,
    sizes: ["XS", "S", "M", "L"],
    images: [R8, R2],
    description:
      "Une robe de chambre longue en velours doux, pour les soirées cocooning et les matins d'hiver. Chaleureux, enveloppant, avec des finitions impeccables. La définition du luxe accessible.",
    details: {
      Matière: "75 % coton velours, 25 % polyester 480 g/m²",
      Coupe: "Col châle large, grandes poches, longueur cheville",
      Entretien: "Lavable à 30 °C, séchage à plat",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Crème ivoire, Rose vieilli, Gris perle",
    },
    styleWith: ["peignoir-satin-ivoire-femme", "peignoir-coton-douceur-femme"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getSimilarProducts(slug: string, limit = 4): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return products
    .filter((p) => p.slug !== slug && p.collection === product.collection)
    .slice(0, limit);
}
