import { Component } from '@angular/core';
import { SidebarComponent } from '../../core/shared/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../core/shared/components/header/header.component';

@Component({
  selector: 'home',
  imports: [SidebarComponent, RouterOutlet, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
