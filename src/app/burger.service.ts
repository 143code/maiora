import { Injectable } from '@angular/core';
import { Burger, Cart, CartItem } from './model';
import { Observable, of } from 'rxjs';
import { BURGERS } from './constants';

@Injectable({
  providedIn: 'root',
})
export class BurgerService {
  constructor() {}

  cart: Cart = { totalPrice: 0, items: [] };

  addToCartService(cartItem: CartItem | undefined, add: number): void {
    this.getCartItems();
    if (cartItem) {
      this.cart.totalPrice = cartItem.price * cartItem.count;
      const index = this.cart.items.findIndex((itm) => itm.id === cartItem.id);
      index > -1
        ? (this.cart.items[index].count += add)
        : this.cart.items.push(cartItem);
      const UpdatedIndex = this.cart.items.findIndex(
        (itm) => itm.id === cartItem.id
      );
      this.cart.items[UpdatedIndex].count === 0 &&
        this.cart.items.splice(UpdatedIndex, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  getCartItems(): Observable<Cart> {
    const cartString = localStorage.getItem('cart');
    this.cart = JSON.parse(cartString ?? '');
    return of(this.cart);
  }
  getCartCount(id: number): Observable<number> {
    this.getCartItems();
    const countCart = this.cart?.items?.find((item) => item.id === id)?.count;
    return of(countCart ?? 0);
  }

  getBurgerDetails(id: number): Observable<Burger | undefined> {
    return of(BURGERS.find((burger) => burger.id === id));
  }
}
