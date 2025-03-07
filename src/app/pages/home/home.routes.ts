import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CampaignsComponent } from '../campaigns/campaigns.component';

export const HomePageRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'campaigns',
    component: CampaignsComponent
  }
];
