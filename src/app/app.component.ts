import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SidebarComponent } from './core/shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './core/shared/components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  isCollapsed = false;
}
