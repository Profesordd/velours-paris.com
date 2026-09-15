import { Product } from "./types";

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

// Verified free CDN IDs — no brand logos
const R1  = U("1623120594168-a6d35474043b"); // man in bathrobe with drink
const R2  = U("1770294759101-fae1377d4d34"); // woman in white bathrobe wooden wall
const R3  = U("1704428381445-dc61b037cfd2"); // white robe hanging on wall
const R4  = U("1661023178485-95a0654b62aa"); // pair of white robes on wall
const R5  = U("1710378439817-6159c79bda03"); // robe hanging hotel room
const R6  = U("1766727923624-2e8eede5aa8c"); // colorful bathrobes with towels
const R7  = U("1787724778628-ad5eb4e725a8"); // woman drying hair in bathrobe
const R8  = U("1535272126276-63decfb8c4d7"); // woman white bathrobe on terrace
const R9  = U("1609535895148-cf9f5c446290"); // smiling woman bathrobe with mug
const R10 = U("1704428381481-92bf396b24bd"); // bathroom two robes
const R11 = U("1609535904959-aaa9d01fb5a4"); // woman in white sitting in chair
const R12 = U("1643916205111-0fd2357e08ed"); // woman relaxing by window

export const products: Product[] = [
  {
    slug: "peignoir-moelleux-blanc",
    name: "Peignoir Moelleux Blanc",
    price: 109,
    category: "Peignoir",
    collection: "peignoir",
    badge: "BESTSELLER",
    sizes: ["S", "M", "L", "XL"],
    images: [R3, R5],
    description:
      "Le grand classique de la collection. Un peignoir en coton éponge 550 g/m² d'une douceur incomparable, avec des bouclettes longues et moelleuses. Le blanc intemporel, celui qu'on offre et qu'on garde pour soi.",
    details: {
      Matière: "100 % coton éponge 550 g/m²",
      Coupe: "Col châle, ceinture réglable, deux poches",
      Entretien: "Lavable à 60 °C, séchage en machine",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Blanc",
    },
    styleWith: ["peignoir-nid-abeille-naturel", "peignoir-moelleux-vieux-rose"],
  },
  {
    slug: "peignoir-moelleux-terracotta",
    name: "Peignoir Moelleux Terracotta",
    price: 109,
    category: "Peignoir",
    collection: "peignoir",
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    images: [R9, R3],
    description:
      "Une teinte chaude et enveloppante qui capture l'esprit de la Méditerranée. Le même coton moelleux 550 g/m² que notre bestseller blanc, dans une couleur tendance qui réchauffe l'hiver comme l'été.",
    details: {
      Matière: "100 % coton éponge 550 g/m²",
      Coupe: "Col châle, ceinture réglable, deux poches",
      Entretien: "Lavable à 60 °C, séchage en machine",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Terracotta",
    },
    styleWith: ["peignoir-moelleux-blanc", "peignoir-nid-abeille-naturel"],
  },
  {
    slug: "peignoir-moelleux-vert-foret",
    name: "Peignoir Moelleux Vert Forêt",
    price: 109,
    category: "Peignoir",
    collection: "peignoir",
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    images: [R1, R10],
    description:
      "Un vert profond qui évoque les sous-bois et les escapades nature. Confectionné dans notre coton éponge signature 550 g/m², il associe la robustesse d'un tissu de qualité à une douceur immédiate au toucher.",
    details: {
      Matière: "100 % coton éponge 550 g/m²",
      Coupe: "Col châle, ceinture réglable, deux poches",
      Entretien: "Lavable à 60 °C, séchage en machine",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Vert Forêt",
    },
    styleWith: ["peignoir-moelleux-bleu-encre", "peignoir-velours-ecru"],
  },
  {
    slug: "peignoir-moelleux-bleu-encre",
    name: "Peignoir Moelleux Bleu Encre",
    price: 109,
    category: "Peignoir",
    collection: "peignoir",
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    images: [R5, R4],
    description:
      "Le bleu encre, profond et élégant, qui fait de chaque matin un moment raffiné. Bouclettes denses et absorbantes, tombé généreux — ce peignoir est conçu pour durer des années sans perdre de sa douceur.",
    details: {
      Matière: "100 % coton éponge 550 g/m²",
      Coupe: "Col châle, ceinture réglable, deux poches",
      Entretien: "Lavable à 60 °C, séchage en machine",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Bleu Encre",
    },
    styleWith: ["peignoir-moelleux-blanc", "peignoir-capuche-grenat"],
  },
  {
    slug: "peignoir-moelleux-vieux-rose",
    name: "Peignoir Moelleux Vieux Rose",
    price: 109,
    category: "Peignoir",
    collection: "peignoir",
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    images: [R6, R7],
    description:
      "Le rose vieilli, délicat et intemporel. Une couleur douce qui flatte toutes les carnations, portée par un coton éponge ultra-moelleux 550 g/m². Le cadeau parfait pour s'offrir ou offrir un moment de douceur.",
    details: {
      Matière: "100 % coton éponge 550 g/m²",
      Coupe: "Col châle, ceinture réglable, deux poches",
      Entretien: "Lavable à 60 °C, séchage en machine",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Vieux Rose",
    },
    styleWith: ["peignoir-moelleux-blanc", "peignoir-nid-abeille-vieux-rose"],
  },
  {
    slug: "peignoir-moelleux-rayure-taormina",
    name: "Peignoir Rayure Taormina",
    price: 119,
    category: "Peignoir",
    collection: "peignoir",
    badge: "NOUVEAU",
    sizes: ["S", "M", "L", "XL"],
    images: [R4, R10],
    description:
      "Inspiré des bords de mer siciliens, ce peignoir à rayures verticales allie le charme balnéaire à la qualité textile premium. Coton moelleux 550 g/m², rayures tissées (non imprimées) pour un motif qui ne s'efface pas au lavage.",
    details: {
      Matière: "100 % coton éponge 550 g/m²",
      Coupe: "Col châle, ceinture réglable, deux poches",
      Entretien: "Lavable à 40 °C, séchage en machine",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Blanc / Bleu Taormina",
    },
    styleWith: ["peignoir-moelleux-bleu-encre", "peignoir-capuche-grenat"],
  },
  {
    slug: "peignoir-moelleux-etoile-or",
    name: "Peignoir Moelleux Étoile d'Or",
    price: 119,
    category: "Peignoir",
    collection: "peignoir",
    badge: "EXCLUSIF",
    sizes: ["S", "M", "L", "XL"],
    images: [R8, R2],
    description:
      "Un peignoir blanc brodé d'une étoile dorée sur le cœur — la pièce signature de la collection. Le détail qui transforme un peignoir en cadeau mémorable, pour soi ou pour quelqu'un qu'on aime.",
    details: {
      Matière: "100 % coton éponge 550 g/m²",
      Coupe: "Col châle, broderie étoile dorée, ceinture réglable",
      Entretien: "Lavable à 40 °C, séchage en machine à basse température",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Blanc / Broderie Or",
    },
    styleWith: ["peignoir-velours-ecru", "peignoir-moelleux-blanc"],
  },
  {
    slug: "peignoir-moelleux-beige",
    name: "Peignoir Moelleux Beige",
    price: 109,
    category: "Peignoir",
    collection: "peignoir",
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    images: [R11, R9],
    description:
      "Le beige naturel, neutre et chaleureux, qui s'harmonise avec tous les intérieurs. Notre coton éponge signature 550 g/m² dans une teinte intemporelle que l'on ne se lasse pas de porter.",
    details: {
      Matière: "100 % coton éponge 550 g/m²",
      Coupe: "Col châle, ceinture réglable, deux poches",
      Entretien: "Lavable à 60 °C, séchage en machine",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Beige Naturel",
    },
    styleWith: ["peignoir-moelleux-blanc", "peignoir-nid-abeille-naturel"],
  },
  {
    slug: "peignoir-nid-abeille-naturel",
    name: "Peignoir Nid d'Abeille Naturel",
    price: 95,
    category: "Peignoir",
    collection: "peignoir",
    badge: "BESTSELLER",
    sizes: ["S", "M", "L", "XL"],
    images: [R2, R5],
    description:
      "Le peignoir léger par excellence. Tissu nid d'abeille 100 % coton 375 g/m², aéré et séchant rapidement — parfait pour l'été, le sport ou les voyages. Léger à porter, facile à emporter.",
    details: {
      Matière: "100 % coton nid d'abeille 375 g/m²",
      Coupe: "Col kimono, ceinture nouée, longueur genou",
      Entretien: "Lavable à 60 °C, séchage rapide",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Naturel / Écru",
    },
    styleWith: ["peignoir-nid-abeille-bleu", "peignoir-moelleux-blanc"],
  },
  {
    slug: "peignoir-nid-abeille-bleu",
    name: "Peignoir Nid d'Abeille Bleu",
    price: 95,
    category: "Peignoir",
    collection: "peignoir",
    badge: "NOUVEAU",
    sizes: ["S", "M", "L", "XL"],
    images: [R10, R4],
    description:
      "Le nid d'abeille dans un bleu doux et frais, idéal pour les journées chaudes. Tissu alvéolé ultra-respirant, léger comme une plume (375 g/m²), séchage express. Le peignoir qu'on porte même en dehors de la salle de bain.",
    details: {
      Matière: "100 % coton nid d'abeille 375 g/m²",
      Coupe: "Col kimono, ceinture nouée, longueur genou",
      Entretien: "Lavable à 60 °C, séchage rapide",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Bleu",
    },
    styleWith: ["peignoir-nid-abeille-naturel", "peignoir-moelleux-bleu-encre"],
  },
  {
    slug: "peignoir-velours-ecru",
    name: "Peignoir Velours Écru",
    price: 139,
    category: "Peignoir",
    collection: "peignoir",
    badge: "EXCLUSIF",
    sizes: ["S", "M", "L", "XL"],
    images: [R12, R8],
    description:
      "Notre pièce premium. Un velours de coton d'une densité rare, dans un écru chaud et luxueux. Ce peignoir est conçu pour durer des décennies — il devient plus doux à chaque lavage. La définition du luxe à la maison.",
    details: {
      Matière: "100 % velours de coton 480 g/m²",
      Coupe: "Col châle large, deux grandes poches, longueur mollet",
      Entretien: "Lavable à 30 °C, séchage à plat",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Écru",
    },
    styleWith: ["peignoir-moelleux-etoile-or", "peignoir-capuche-grenat"],
  },
  {
    slug: "peignoir-capuche-grenat",
    name: "Peignoir à Capuche Grenat",
    price: 139,
    category: "Peignoir",
    collection: "peignoir",
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    images: [R7, R6],
    description:
      "Un peignoir à capuche dans un grenat profond et enveloppant. La capuche intégrée offre une chaleur supplémentaire après la douche ou la piscine. Rayures tisssées, coton éponge 550 g/m², tombé impeccable.",
    details: {
      Matière: "100 % coton éponge 550 g/m²",
      Coupe: "Capuche intégrée, ceinture réglable, deux poches",
      Entretien: "Lavable à 40 °C, séchage en machine",
      Fabrication: "Fabriqué en Europe",
      Coloris: "Grenat / Blanc",
    },
    styleWith: ["peignoir-moelleux-bleu-encre", "peignoir-velours-ecru"],
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
