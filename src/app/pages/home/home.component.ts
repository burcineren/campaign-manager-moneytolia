import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from '../../core/shared/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../core/shared/components/header/header.component';
import { CampaignsComponent } from '../campaigns/campaigns.component';

@Component({
  selector: 'home',
  imports: [SidebarComponent, RouterOutlet, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent {

}
