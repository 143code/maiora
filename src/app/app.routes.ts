import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CartComponent } from './cart/cart.component';
import { producerAccessed } from '@angular/core/primitives/signals';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductComponent },
];
