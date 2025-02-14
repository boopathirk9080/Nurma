export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  images?: string[];
  category: string;
  life: string;
  ingredient:string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}