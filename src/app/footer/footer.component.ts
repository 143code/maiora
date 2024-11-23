import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly footerIcons = [
    { id: 1, name: 'home' },
    { id: 2, name: 'grid_view' },
    { id: 3, name: 'explore' },
    { id: 4, name: 'shopping_cart' },
    { id: 5, name: 'person' },
  ];
}
