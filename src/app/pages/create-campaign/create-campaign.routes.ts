import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { CreateCampaignComponent } from './create-campaign.component';

export const CreateCampaignPageRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CreateCampaignComponent },

    ],
  },
];
