// src/types.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
  description: string;
  sizes: string[];
  colors: string[];
  fabric: string;
  category: string;
  featured?: boolean;
  isNew?: boolean;
  tags?: string[];
  careInstructions?: string[];
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  customOrder: boolean;
}