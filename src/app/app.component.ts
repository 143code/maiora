import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    MatSidenavModule,
    BodyComponent,
    FooterComponent,
    SideMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FoodApp';

  onSideNavToggle() { }
}
