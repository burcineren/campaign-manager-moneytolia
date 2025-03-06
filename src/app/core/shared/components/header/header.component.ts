import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'header',
  imports: [NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzDrawerModule],
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
