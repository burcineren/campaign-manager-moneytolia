import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SidebarComponent } from './core/shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './core/shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, LoginComponent, SidebarComponent, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isCollapsed = false;
}
