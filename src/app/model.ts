export interface Burger {
  id: number;
  name: string;
  price: number;
  burgerDescription: string;
  inStock: boolean;
  popularItems: boolean;
  newArrival: boolean;
  specialOffers: boolean;
  burgerImage: string;
}

export interface CartItem {
  id: number;
  price: number;
  count: number;
}

export interface Cart {
  totalPrice: number;
  items: CartItem[];
}
