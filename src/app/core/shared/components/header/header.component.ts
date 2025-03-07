import { Component } from '@angular/core';

@Component({
  selector: 'header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDrawerVisible = false;

  toggleDrawer() {
    this.isDrawerVisible = !this.isDrawerVisible;
  }

  closeDrawer() {
    this.isDrawerVisible = false;
  }
}
