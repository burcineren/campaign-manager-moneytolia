import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HeaderComponent } from '../header/header.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
  selector: 'sidebar',
  imports: [NzMenuModule, NzLayoutModule,
    NzIconModule, NzBreadCrumbModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
