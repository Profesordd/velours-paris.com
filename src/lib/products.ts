import { Product } from "./types";

// All images verified on Unsplash — no brand logos
const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

// ── Verified CDN IDs ────────────────────────────────────────────────
// Belts
const B1 = U("1664286074176-5206ee5dc878"); // leather belt on black surface
const B2 = U("1664285612706-b32633c95820"); // leather belt with buckle
const B3 = U("1705493655920-20c572928501"); // brown leather belt on wooden floor
const B4 = U("1611937685025-8d1df67a80b6"); // black leather belt on denim
const B5 = U("1679759022456-a7eae2257ba2"); // multiple belts on wooden pole
const B6 = U("1664286074240-d7059e004dff"); // leather belt closeup buckle
const B7 = U("1664286022075-8e997e95bd17"); // leather belt buckle side view
const B8 = U("1624222247344-550fb60583dc"); // brown leather belt silver buckle display
const B9 = U("1637868796504-32f45a96d5a0"); // leather goods flat lay (belt + shoes + wallet)
const B10 = U("1665573708655-7320ed78bbeb"); // leather accessory on wooden bench

// Bags
const SAC1 = U("1473188588951-666fce8e7c68"); // brown leather satchel on concrete
const SAC2 = U("1624687943971-e86af76d57de"); // brown leather tote on white
const SAC3 = U("1657603738389-951c374b740c"); // brown leather structured bag
const SAC4 = U("1603219527847-24c87f552a77"); // black leather sling on wood table
const SAC5 = U("1608731267464-c0c889c2ff92"); // person with leather shoulder bag

// Small leather goods
const W1 = U("1629958317491-bd40c9fa757e"); // black bifold wallet on brown textile
const W2 = U("1678449544865-c03dc897112d"); // hand holding black leather wallet
const W3 = U("1629958513881-a086d21383cd"); // black leather bifold on fabric
const W4 = U("1492105232359-ca132c09762c"); // leather wallet with craft tools

export const products: Product[] = [

  // ── Ceintures ────────────────────────────────────────────────────

  {
    slug: "ceinture-vegetale-cognac",
    name: "Ceinture Végétale Cognac — Pleine Fleur",
    price: 89.00,
    category: "Ceintures",
    collection: "ceintures",
    badge: "BESTSELLER",
    sizes: ["70", "75", "80", "85", "90", "95", "100", "105"],
    images: [B1, B2, B3],
    description:
      "Tannée à la végétale selon les méthodes traditionnelles, cette ceinture en cuir pleine fleur cognac développe une belle patine au fil du temps. Boucle en laiton massif, coutures sellier visibles. Une pièce qui dure une vie.",
    details: {
      matiere: "Cuir pleine fleur végétan",
      largeur: "35 mm",
      boucle: "Laiton massif",
      epaisseur: "4 mm",
      origine: "Fabriqué en Europe",
      garantie: "À vie",
    },
    styleWith: ["Jean brut", "Chino beige", "Pantalon de costume"],
  },

  {
    slug: "ceinture-cuir-box-noire",
    name: "Ceinture Cuir Box Noire — Boucle Acier",
    price: 95.00,
    category: "Ceintures",
    collection: "ceintures",
    badge: "NOUVEAU",
    sizes: ["70", "75", "80", "85", "90", "95", "100"],
    images: [B4, B7, B6],
    description:
      "Cuir box noir à grain très serré, résistant aux rayures et à l'humidité. Boucle en acier inoxydable finition brossée. Une ceinture sobre, élégante, pour tous les jours.",
    details: {
      matiere: "Cuir box noir (grain serré)",
      largeur: "32 mm",
      boucle: "Acier inoxydable brossé",
      epaisseur: "3.5 mm",
      origine: "Fabriqué en Europe",
      garantie: "2 ans",
    },
    styleWith: ["Costume sombre", "Jean noir", "Derby noires"],
  },

  {
    slug: "ceinture-tressee-marron",
    name: "Ceinture Tressée Marron — Lanières Main",
    price: 115.00,
    category: "Ceintures",
    collection: "ceintures",
    badge: "BESTSELLER",
    sizes: ["70", "75", "80", "85", "90", "95", "100", "105"],
    images: [B5, B10, B3],
    description:
      "Tressage à la main en cuir pleine fleur marron. Souplesse et résistance exceptionnelles grâce à la technique artisanale de tressage à 5 lanières. Boucle en laiton doré.",
    details: {
      matiere: "Cuir pleine fleur marron",
      largeur: "35 mm tressé",
      boucle: "Laiton doré",
      technique: "Tressage 5 lanières à la main",
      origine: "Fabriqué en Europe",
      garantie: "2 ans",
    },
    styleWith: ["Jean bleu", "Chino kaki", "Mocassins cognac"],
  },

  {
    slug: "ceinture-reversible-havane-noir",
    name: "Ceinture Réversible Havane / Noir",
    price: 99.00,
    category: "Ceintures",
    collection: "ceintures",
    badge: null,
    sizes: ["75", "80", "85", "90", "95", "100", "105"],
    images: [B8, B6, B1],
    description:
      "Deux ceintures en une — côté havane naturel, côté noir. Boucle pivot en laiton qui se retourne sans outil. Cuir lisse pleine fleur des deux côtés. La pièce polyvalente par excellence.",
    details: {
      matiere: "Cuir pleine fleur — recto havane, verso noir",
      largeur: "32 mm",
      boucle: "Pivot laiton (sans outil)",
      epaisseur: "2 × 2 mm contrecollé",
      origine: "Fabriqué en Europe",
      garantie: "2 ans",
    },
    styleWith: ["Toutes tenues", "Jean bleu", "Pantalon gris"],
  },

  {
    slug: "ceinture-fine-dress-25mm",
    name: "Ceinture Fine Dress 25 mm — Noire",
    price: 75.00,
    category: "Ceintures",
    collection: "ceintures",
    badge: null,
    sizes: ["65", "70", "75", "80", "85", "90", "95"],
    images: [B7, B4, B2],
    description:
      "Ceinture fine 25 mm en cuir noir lisse pour tenues habillées. Boucle plaquée or fin, doublure velours. La touche de distinction pour les costumes et pantalons de ville.",
    details: {
      matiere: "Cuir noir lisse pleine fleur",
      largeur: "25 mm",
      boucle: "Plaque dorée fin",
      doublure: "Velours noir",
      origine: "Fabriqué en Europe",
      garantie: "2 ans",
    },
    styleWith: ["Costume", "Smoking", "Pantalon de ville"],
  },

  {
    slug: "ceinture-naturel-vegetan-brut",
    name: "Ceinture Végétan Naturel — Non Teintée",
    price: 85.00,
    category: "Ceintures",
    collection: "ceintures",
    badge: null,
    sizes: ["70", "75", "80", "85", "90", "95", "100", "105"],
    images: [B9, B5, B8],
    description:
      "Cuir végétan non teint, dans sa couleur naturelle miel claire. Se patine avec les mois pour devenir unique. Boucle en acier brut. Pour les amateurs de matière vivante.",
    details: {
      matiere: "Cuir végétan naturel non teint",
      largeur: "38 mm",
      boucle: "Acier brut",
      patine: "Vieillissement progressif naturel",
      origine: "Fabriqué en Europe",
      garantie: "À vie",
    },
    styleWith: ["Jean brut", "Linen", "Style workwear"],
  },

  // ── Sacs ─────────────────────────────────────────────────────────

  {
    slug: "sac-cabas-naturel",
    name: "Sac Cabas Cuir Naturel — Grand Format",
    price: 320.00,
    category: "Sacs",
    collection: "sacs",
    badge: "BESTSELLER",
    sizes: ["Unique"],
    images: [SAC1, SAC2, SAC3],
    description:
      "Grand cabas en cuir végétan naturel tanné. Anse en cuir rond, doublure coton naturel, poche intérieure zippée. Vieillissement remarquable — chaque sac devient unique avec le temps.",
    details: {
      matiere: "Cuir végétan naturel",
      dimensions: "40 × 32 × 14 cm",
      anse: "Cuir rond — main ou épaule",
      doublure: "Coton naturel",
      poches: "1 intérieure zippée",
      origine: "Fabriqué en Europe",
      garantie: "2 ans",
    },
    styleWith: ["Trench beige", "Robe de lin", "Jean blanc"],
  },

  {
    slug: "sac-a-main-cognac-structure",
    name: "Sac à Main Structuré — Cognac Grainé",
    price: 265.00,
    category: "Sacs",
    collection: "sacs",
    badge: "EXCLUSIF",
    sizes: ["Unique"],
    images: [SAC3, SAC5, SAC1],
    description:
      "Sac à main structuré en cuir grainé cognac. Corps semi-rigide, fermeture magnétique, anse réglable. Doublure alcantara taupe. Un sac élégant qui traverse les saisons.",
    details: {
      matiere: "Cuir grainé pleine fleur cognac",
      dimensions: "28 × 20 × 10 cm",
      fermeture: "Magnétique + zip sécurité",
      anses: "Tresse cuir + bandoulière réglable",
      doublure: "Alcantara taupe",
      poches: "2 ext + 2 int",
      origine: "Fabriqué en Europe",
      garantie: "2 ans",
    },
    styleWith: ["Blazer", "Robe midi", "Tailleur"],
  },

  {
    slug: "sac-weekend-cuir-box",
    name: "Sac Week-end Cuir Box — Havane",
    price: 460.00,
    category: "Sacs",
    collection: "sacs",
    badge: null,
    sizes: ["Unique"],
    images: [SAC4, SAC5, SAC2],
    description:
      "Sac week-end en cuir box havane. Grande capacité (40L), structure souple, bandoulière amovible. Serrure à cadenas en laiton. Le compagnon idéal pour partir avec style.",
    details: {
      matiere: "Cuir box havane",
      dimensions: "50 × 30 × 25 cm — 40 L",
      fermeture: "Zip double + cadenas laiton",
      anses: "Portée main + bandoulière cuir",
      doublure: "Coton épais rayé",
      poches: "2 ext zippées + 1 central",
      origine: "Fabriqué en Europe",
      garantie: "2 ans",
    },
    styleWith: ["Look voyageur", "Jean + chemise", "Manteau"],
  },

  // ── Petite Maroquinerie ──────────────────────────────────────────

  {
    slug: "portefeuille-slim-cognac",
    name: "Portefeuille Slim 8 Cartes — Cognac",
    price: 79.00,
    category: "Petite Maroquinerie",
    collection: "petite-maroquinerie",
    badge: "BESTSELLER",
    sizes: ["Unique"],
    images: [W1, W2, W3],
    description:
      "Portefeuille slim en cuir pleine fleur cognac. 8 emplacements carte, 1 compartiment billets, 1 fenêtre ID. Épaisseur 8 mm à vide. La discrétion du luxe au quotidien.",
    details: {
      matiere: "Cuir pleine fleur cognac",
      cartes: "8 emplacements",
      billets: "1 compartiment",
      epaisseur: "8 mm (vide)",
      origine: "Fabriqué en Europe",
      garantie: "2 ans",
    },
    styleWith: ["Poche veste", "Sac cabas", "Ceinture cognac"],
  },

  {
    slug: "porte-cartes-vegetan",
    name: "Porte-Cartes Végétan — 4 Cartes",
    price: 45.00,
    category: "Petite Maroquinerie",
    collection: "petite-maroquinerie",
    badge: "NOUVEAU",
    sizes: ["Unique"],
    images: [W2, W3, W1],
    description:
      "Porte-cartes ultra-fin en cuir végétan naturel. 4 emplacements carte. Accessible en un geste. La pièce parfaite pour qui n'emporte que l'essentiel.",
    details: {
      matiere: "Cuir végétan naturel",
      cartes: "4 emplacements",
      epaisseur: "4 mm (vide)",
      origine: "Fabriqué en Europe",
      garantie: "2 ans",
    },
    styleWith: ["Portefeuille slim", "Sac week-end", "Ceinture"],
  },

  {
    slug: "porte-monnaie-zip-noir",
    name: "Porte-Monnaie Zip — Noir",
    price: 59.00,
    category: "Petite Maroquinerie",
    collection: "petite-maroquinerie",
    badge: null,
    sizes: ["Unique"],
    images: [W3, W1, W2],
    description:
      "Porte-monnaie en cuir box noir, zip YKK laiton doré. Compartiment monnaie, 2 emplacements carte, 1 billet. Format compact, finitions irréprochables.",
    details: {
      matiere: "Cuir box noir",
      fermeture: "Zip YKK laiton doré",
      compartiments: "Monnaie + 2 cartes + 1 billet",
      origine: "Fabriqué en Europe",
      garantie: "2 ans",
    },
    styleWith: ["Sac à main", "Portefeuille slim", "Ceinture noire"],
  },

  {
    slug: "carnet-cuir-artisan",
    name: "Carnet Cuir Artisan — Havane",
    price: 72.00,
    category: "Petite Maroquinerie",
    collection: "petite-maroquinerie",
    badge: null,
    sizes: ["A5", "A6"],
    images: [W4, W1, W3],
    description:
      "Couverture de carnet en cuir pleine fleur havane. Disponible en A5 et A6. Fermeture élastique, carnet Rhodia intérieur remplaçable. Personnalisation gravure au fer chaud en option.",
    details: {
      matiere: "Cuir pleine fleur havane",
      formats: "A5 (148 × 210 mm) / A6 (105 × 148 mm)",
      fermeture: "Élastique cuir",
      interieur: "Carnet Rhodia 80 g/m² inclus",
      personnalisation: "Gravure initiales disponible",
      origine: "Fabriqué en Europe",
      garantie: "2 ans",
    },
    styleWith: ["Bureau", "Réunions", "Cadeau d'exception"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getSimilarProducts(slug: string, count = 4): Product[] {
  const p = products.find((x) => x.slug === slug);
  return products
    .filter((x) => x.slug !== slug && (!p || x.collection === p.collection))
    .slice(0, count);
}

export function getProductsByCollection(collection: string): Product[] {
  if (!collection) return products;
  return products.filter((p) => p.collection === collection);
}
