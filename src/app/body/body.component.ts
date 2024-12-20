import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { BURGERS } from '../constants';

@Component({
  selector: 'app-body',
  imports: [CardComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  readonly burgers = BURGERS;
}
