export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    name: string;
  };
  images: string[];
}
