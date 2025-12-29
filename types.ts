
export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  images: ProductImage[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  specs: { label: string; value: string }[];
  reviews: Review[];
}
