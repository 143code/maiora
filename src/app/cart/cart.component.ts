import { Component } from '@angular/core';
import { BurgerService } from '../burger.service';
import { Cart } from '../model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(private readonly service: BurgerService) {}
  cart: Cart | undefined;

  updateCart(idx: number, add: number) {
    this.service.addToCartService(this.cart?.items[idx], add);
    this.getCartItems();
  }
  onCountIncrement(idx: number) {
    this.cart?.items[idx]?.count;
    this.updateCart(idx, 1);
  }
  onCountDecrement(idx: number) {
    this.cart?.items[idx]?.count;
    this.cart?.items[idx]?.count && this.updateCart(idx, -1);
  }
  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() {
    this.service.getCartItems().subscribe((cart) => (this.cart = cart));
  }
  onBuyNow() {
    console.log('Cart Details', this.cart);
  }
}
