import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BurgerService } from '../burger.service';
import { Burger } from '../model';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-product',
  imports: [CommonModule, MatButtonToggleModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: BurgerService
  ) {}
  burger: Burger | undefined;
  cartCount = 0;
  id: number | undefined;
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service
      .getBurgerDetails(this.id ?? '')
      .subscribe((res) => (this.burger = res));
    this.service
      .getCartCount(this.id)
      .subscribe((res) => (this.cartCount = res));
  }
  addToCart(add: number): void {
    this.burger &&
      this.service.addToCartService(
        { ...this.burger, count: this.cartCount },
        add
      );
  }
  onCountDecrement(): void {
    this.cartCount--;
    this.addToCart(-1);
  }
  onCountIncrement(): void {
    this.cartCount++;
    this.addToCart(1);
  }
}
