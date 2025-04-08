export interface Product {
  id: number;
  name: string;
  description: string;
  precio: number;
  images: string[];
  size?: string;
  selectedQuantity?: number;
  isPersonalized?: boolean;
  estimatedTime?: string;
  categoria?: string;
  unidades?: number; // opcional para compatibilidad
  colors?: string[];
}

export interface Set {
  id: number;
  name: string;
  description: string;
  precio: number;
  images: string[];
  unidades?: number;
  size?: string;
  selectedQuantity?: number;
  estimatedTime?: string;
  colors?: string[];
  categoria?: string;
}

export type ProductOrSet = Product | Set;
