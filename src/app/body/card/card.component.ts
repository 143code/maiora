import { Component, input } from '@angular/core';
import { Burger, CartItem } from '../../model';
import { CommonModule } from '@angular/common';
import { BurgerService } from '../../burger.service';
import { log } from 'console';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(private burgerService: BurgerService) {}
  burger = input<Burger>();

  onAddToCart(): void {
    let cartItem: CartItem = {
      id: this.burger()?.id!,
      price: this.burger()?.price!,
      count: 1,
    };
    this.burgerService.addToCartService(cartItem);
  }
  onCardCLick(): void {
    console.log('Click');
  }
}
