import { Component } from '@angular/core';
import { sidenavMenu } from '../constants';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-side-menu',
  imports: [MatSidenavModule, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  readonly menuItems = sidenavMenu;
  selected = 1;
  console = console;
}
