import { Product } from "./types";

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

// Verified free CDN IDs — no brand logos
const R1  = U("1623120594168-a6d35474043b");
const R2  = U("1770294759101-fae1377d4d34");
const R3  = U("1704428381445-dc61b037cfd2");
const R4  = U("1661023178485-95a0654b62aa");
const R5  = U("1710378439817-6159c79bda03");
const R6  = U("1766727923624-2e8eede5aa8c");
const R7  = U("1787724778628-ad5eb4e725a8");
const R8  = U("1535272126276-63decfb8c4d7");
const R9  = U("1609535895148-cf9f5c446290");
const R10 = U("1704428381481-92bf396b24bd");
const R11 = U("1609535904959-aaa9d01fb5a4");
const R12 = U("1643916205111-0fd2357e08ed");

export const products: Product[] = [
  {
    slug: "peignoir-moelleux-blanc",
    name: "Peignoir Moelleux Juste Le Blanc",
    price: 109,
    category: "Peignoir",
    collection: "peignoir",
    badge: "BESTSELLER",
    sizes: ["S", "M", "L", "XL"],
    images: [R3, R5],
    description:
      "Ultra doux et moelleux grâce à ses longues bouclettes et son grammage luxueux de 550 g/m². Ceinture cousue dans le dos pour ne plus la perdre, manches ajustées qui ne traînent plus dans l'eau, deux grandes poches et longueur sous le genou. Un petit anneau discret au col pour l'accrocher facilement.",
    details: {
      Composition: "100% coton peigné longues fibres",
      Grammage: "550 g/m²",
      Tailles: "S, M, L, XL",
      Entretien: "Lavage à 40°C, sans adoucissant. Séchage machine recommandé.",
      Certification: "OEKO-TEX® STANDARD 100",
      Fabrication: "Turquie (tissage, teinture, confection)",
    },
    styleWith: ["peignoir-nid-abeille-sable", "peignoir-moelleux-vieux-rose"],
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
      "Ultra doux et moelleux grâce à ses longues bouclettes et son grammage luxueux de 550 g/m². Ceinture cousue dans le dos pour ne plus la perdre, manches ajustées qui ne traînent plus dans l'eau, deux grandes poches et longueur sous le genou. Un petit anneau discret au col pour l'accrocher facilement.",
    details: {
      Composition: "100% coton peigné longues fibres",
      Grammage: "550 g/m²",
      Tailles: "S, M, L, XL",
      Entretien: "Lavage à 40°C, sans adoucissant. Séchage machine recommandé.",
      Certification: "OEKO-TEX® STANDARD 100",
      Fabrication: "Turquie (tissage, teinture, confection)",
    },
    styleWith: ["peignoir-moelleux-blanc", "peignoir-nid-abeille-terracotta"],
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
      "Ultra doux et moelleux grâce à ses longues bouclettes et son grammage luxueux de 550 g/m². Ceinture cousue dans le dos pour ne plus la perdre, manches ajustées qui ne traînent plus dans l'eau, deux grandes poches et longueur sous le genou. Technologie Soft Twist® pour des bouclettes aérées et ultra absorbantes.",
    details: {
      Composition: "100% coton peigné longues fibres",
      Grammage: "550 g/m²",
      Tailles: "S, M, L, XL",
      Entretien: "Lavage à 40°C, sans adoucissant. Séchage machine recommandé.",
      Certification: "OEKO-TEX® STANDARD 100",
      Fabrication: "Turquie (tissage, teinture, confection)",
    },
    styleWith: ["peignoir-moelleux-bleu-encre", "peignoir-velours-famiglia-ecru"],
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
      "Ultra doux et moelleux grâce à ses longues bouclettes et son grammage luxueux de 550 g/m². Ceinture cousue dans le dos pour ne plus la perdre, manches ajustées qui ne traînent plus dans l'eau, deux grandes poches et longueur sous le genou. Coupe unisexe.",
    details: {
      Composition: "100% coton peigné longues fibres",
      Grammage: "550 g/m²",
      Tailles: "S, M, L, XL",
      Entretien: "Lavage à 40°C, sans adoucissant. Séchage machine recommandé.",
      Certification: "OEKO-TEX® STANDARD 100",
      Fabrication: "Turquie (tissage, teinture, confection)",
    },
    styleWith: ["peignoir-capuche-rayure-cobalt", "peignoir-moelleux-blanc"],
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
      "Ultra doux et moelleux grâce à ses longues bouclettes et son grammage luxueux de 550 g/m². Technologie Soft Twist® : des bouclettes délicatement aérées, moins torsadées que le tissu éponge classique, pour une douceur incomparable. Ceinture cousue dans le dos, manches ajustées, deux grandes poches.",
    details: {
      Composition: "100% coton peigné longues fibres",
      Grammage: "550 g/m²",
      Technologie: "Soft Twist®",
      Tailles: "S, M, L, XL",
      Entretien: "Lavage à 40°C, sans adoucissant. Séchage machine recommandé.",
      Certification: "OEKO-TEX® STANDARD 100",
      Fabrication: "Turquie (tissage, teinture, confection)",
    },
    styleWith: ["peignoir-moelleux-blanc", "peignoir-nid-abeille-sable"],
  },
  {
    slug: "peignoir-moelleux-piano-rouge",
    name: "Peignoir Moelleux Piano Rouge",
    price: 119,
    category: "Peignoir",
    collection: "peignoir",
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    images: [R4, R10],
    description:
      "Ultra moelleux grâce à un coton 550 g/m² super luxe. Ses longues bouclettes de coton longues fibres offrent une douceur immédiate et durable. Manches ajustées qui ne traînent plus dans l'eau, ceinture cousue, deux grandes poches, longueur sous le genou.",
    details: {
      Composition: "100% coton longues fibres",
      Grammage: "550 g/m²",
      Tailles: "S, M, L, XL",
      Entretien: "Lavage à 40°C, sans adoucissant. Séchage machine recommandé.",
      Certification: "OEKO-TEX® STANDARD 100",
      Fabrication: "Turquie (tissage, teinture, confection)",
    },
    styleWith: ["peignoir-moelleux-rayure-taormina", "peignoir-capuche-rayure-cobalt"],
  },
  {
    slug: "peignoir-moelleux-etoile-dor",
    name: "Peignoir Moelleux Étoile d'Or",
    price: 119,
    category: "Peignoir",
    collection: "peignoir",
    badge: "EXCLUSIF",
    sizes: ["S", "M", "L", "XL"],
    images: [R8, R2],
    description:
      "Paré d'étoiles brodées directement dans la bouclette. Ce peignoir en coton 550 g/m² allie la douceur de notre tissu moelleux signature à un détail précieux qui en fait le cadeau idéal. Ceinture cousue dans le dos, manches ajustées, deux grandes poches, longueur sous le genou.",
    details: {
      Composition: "100% coton peigné longues fibres",
      Grammage: "550 g/m²",
      Broderie: "Étoiles dorées brodées dans la bouclette",
      Tailles: "S, M, L, XL",
      Entretien: "Lavage à 40°C, sans adoucissant. Séchage machine à basse température.",
      Certification: "OEKO-TEX® STANDARD 100",
      Fabrication: "Turquie (tissage, teinture, confection)",
    },
    styleWith: ["peignoir-velours-famiglia-ecru", "peignoir-moelleux-blanc"],
  },
  {
    slug: "peignoir-moelleux-rayure-taormina",
    name: "Peignoir Moelleux Rayure Taormina",
    price: 119,
    category: "Peignoir",
    collection: "peignoir",
    badge: "NOUVEAU",
    sizes: ["S", "M", "L", "XL"],
    images: [R11, R9],
    description:
      "Vraiment doux grâce à ses longues bouclettes en coton et ultra moelleux avec son grammage de 550 g/m². Manches ajustées qui ne traînent plus dans l'eau, ceinture cousue dans le dos pour ne plus la perdre, deux grandes poches et longueur sous le genou. Un petit anneau discret au col pour l'accrocher.",
    details: {
      Composition: "100% coton longues fibres",
      Grammage: "550 g/m²",
      Motif: "Rayure Taormina (rayures tissées)",
      Tailles: "S, M, L, XL",
      Entretien: "Lavage à 40°C, sans adoucissant. Séchage machine recommandé.",
      Certification: "OEKO-TEX® STANDARD 100",
      Fabrication: "Turquie (tissage, teinture, confection)",
    },
    styleWith: ["peignoir-moelleux-piano-rouge", "peignoir-capuche-rayure-cobalt"],
  },
  {
    slug: "peignoir-nid-abeille-terracotta",
    name: "Peignoir Nid d'Abeille Terracotta",
    price: 95,
    category: "Peignoir",
    collection: "peignoir",
    badge: "BESTSELLER",
    sizes: ["XS/S", "M/L", "XL/XXL"],
    images: [R2, R11],
    description:
      "Extra doux, absorbant et à séchage rapide grâce à son tissu gaufrée en nid d'abeille 375 g/m². Ceinture cousue dans le dos pour ne plus la perdre, manches ajustées qui ne traînent plus dans l'eau, deux grandes poches et un anneau discret au col. Coupe relaxée et flatteuse, idéale pour les beaux jours.",
    details: {
      Composition: "100% coton",
      Grammage: "375 g/m²",
      Tissu: "Nid d'abeille (gaufré)",
      Tailles: "XS/S, M/L, XL/XXL",
      Entretien: "Lavage à 40°C, sans adoucissant. Séchage machine recommandé.",
      Certification: "OEKO-TEX® STANDARD 100",
      Fabrication: "Portugal (tissage, teinture, confection)",
    },
    styleWith: ["peignoir-nid-abeille-sable", "peignoir-moelleux-terracotta"],
  },
  {
    slug: "peignoir-nid-abeille-sable",
    name: "Peignoir Nid d'Abeille Sable",
    price: 95,
    category: "Peignoir",
    collection: "peignoir",
    badge: "NOUVEAU",
    sizes: ["XS/S", "M/L", "XL/XXL"],
    images: [R12, R8],
    description:
      "Extra doux, souple et très absorbant, avec un séchage ultra rapide. Son tissu gaufré en nid d'abeille 375 g/m² est idéal pour la chaleur et les voyages. Ceinture cousue dans le dos, manches ajustées, deux grandes poches et un anneau discret au col pour l'accrocher.",
    details: {
      Composition: "100% coton",
      Grammage: "375 g/m²",
      Tissu: "Nid d'abeille (gaufré)",
      Tailles: "XS/S, M/L, XL/XXL",
      Entretien: "Lavage à 40°C, sans adoucissant. Séchage machine recommandé.",
      Certification: "OEKO-TEX® STANDARD 100",
      Fabrication: "Portugal (tissage, teinture, confection)",
    },
    styleWith: ["peignoir-nid-abeille-terracotta", "peignoir-moelleux-blanc"],
  },
  {
    slug: "peignoir-velours-famiglia-ecru",
    name: "Peignoir Velours Famiglia Écru",
    price: 139,
    category: "Peignoir",
    collection: "peignoir",
    badge: "EXCLUSIF",
    sizes: ["S", "M", "L", "XL"],
    images: [R7, R6],
    description:
      "Intérieur en bouclettes de coton et extérieur en velours de coton pour une texture unique. Bordures en popeline de coton imprimé Liberty, en édition limitée. Grammage luxueux de 500 g/m². Ceinture cousue dans le dos, manches ajustées, deux grandes poches, longueur sous le genou.",
    details: {
      Composition: "100% coton peigné longues fibres",
      Grammage: "500 g/m²",
      Texture: "Bouclettes intérieur + velours de coton extérieur",
      Bordures: "Popeline de coton motif Liberty (édition limitée)",
      Tailles: "S, M, L, XL",
      Entretien: "Lavage à 40°C, sans adoucissant. Séchage machine recommandé.",
      Certification: "OEKO-TEX® STANDARD 100",
      Fabrication: "Turquie (tissage, teinture, confection)",
    },
    styleWith: ["peignoir-moelleux-etoile-dor", "peignoir-capuche-rayure-cobalt"],
  },
  {
    slug: "peignoir-capuche-rayure-cobalt",
    name: "Peignoir à Capuche Rayure Cobalt",
    price: 139,
    category: "Peignoir",
    collection: "peignoir",
    badge: "NOUVEAU",
    sizes: ["S", "M", "L", "XL"],
    images: [R1, R4],
    description:
      "Doux et ultra moelleux grâce à ses longues bouclettes de coton longues fibres au grammage 500 g/m². Sa capuche oversize enveloppe complètement la tête pour une chaleur incomparable. Technologie Soft Twist® pour des bouclettes aérées et absorbantes. Ceinture cousue, manches ajustées, deux grandes poches.",
    details: {
      Composition: "100% coton longues fibres",
      Grammage: "500 g/m²",
      Technologie: "Soft Twist®",
      Capuche: "Oversize",
      Tailles: "S, M, L, XL",
      Entretien: "Lavage à 40°C, sans adoucissant. Séchage machine recommandé.",
      Certification: "OEKO-TEX® STANDARD 100",
      Fabrication: "Turquie (tissage, teinture, confection)",
    },
    styleWith: ["peignoir-velours-famiglia-ecru", "peignoir-moelleux-bleu-encre"],
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
