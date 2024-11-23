import { Injectable } from '@angular/core';
import { Cart, CartItem } from './model';

@Injectable({
  providedIn: 'root',
})
export class BurgerService {
  constructor() {}

  cart: Cart = { totalPrice: 0, items: [] };

  addToCartService(cartItem: CartItem | undefined): void {
    if (cartItem) {
      this.cart.totalPrice = cartItem.price * cartItem.count;
      this.cart.items.push(cartItem);
      console.log('cart', this.cart);
    }
  }
}
