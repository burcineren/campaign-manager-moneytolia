import { Routes } from '@angular/router';
import { CampaignsComponent } from './campaigns.component';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { CreateCampaignComponent } from '../create-campaign/create-campaign.component';

export const CampaignsPageRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CampaignsComponent },

    ],
  },
];
