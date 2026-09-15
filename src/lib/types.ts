export type ProductDetails = Record<string, string>;

export interface Product {
  slug: string;
  name: string;
  price: number;
  category: string;
  collection: string;
  badge: string | null;
  sizes: string[];
  images: string[];
  description: string;
  details: ProductDetails;
  styleWith: string[];
}

export interface CartItem {
  productSlug: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}
