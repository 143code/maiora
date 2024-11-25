import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor() {}
  readonly footerIcons = [
    { id: 1, name: 'home', routes: 'dashboard' },
    { id: 2, name: 'grid_view', routes: 'dashboard' },
    { id: 3, name: 'explore', routes: 'dashboard' },
    { id: 4, name: 'shopping_cart', routes: 'cart' },
    { id: 5, name: 'person', routes: 'cart' },
  ];
}
