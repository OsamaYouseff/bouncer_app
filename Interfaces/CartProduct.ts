import type { Product } from "./Product";

export interface CartProduct extends Product {
  name: string;
  quantity: number;
  total: number;
}
