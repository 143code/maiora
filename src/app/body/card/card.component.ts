import { Component, input } from '@angular/core';
import { Burger, CartItem } from '../../model';
import { CommonModule } from '@angular/common';
import { BurgerService } from '../../burger.service';
import { Router } from '@angular/router';
import { fail } from 'node:assert';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(private burgerService: BurgerService, private router: Router) {}
  burger = input.required<Burger>();
  count = 0;
  flag = true;
  ngOnInit() {
    this.burgerService
      .getCartCount(this.burger().id)
      .subscribe((res) => (this.count = res));
  }
  updateCart(add: number) {
    this.burgerService.addToCartService(
      { ...this.burger(), count: this.count },
      add
    );
    this.count += add;
  }
  onCountIncrement() {
    this.flag = false;
    this.updateCart(1);
  }
  onCountDecrement() {
    this.flag = false;
    this.updateCart(-1);
  }
  onAddToCart(): void {
    this.count++;
    let cartItem: CartItem = {
      ...this.burger(),
      count: 1,
    };
    this.flag = false;
    this.burgerService.addToCartService(cartItem, 1);
  }
  onCardCLick(): void {
    if (this.flag) {
      this.flag = true;
      this.router.navigate(['/product', { id: this.burger().id }]);
    }
  }
}
