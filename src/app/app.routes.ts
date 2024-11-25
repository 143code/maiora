import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: BodyComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductComponent },
  { path: '**', component: PageNotFoundComponent },
];
