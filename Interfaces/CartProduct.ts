import type { Product } from "./Product";

export interface CartProduct extends Product {
  quantity: number;
  total: number;
}
