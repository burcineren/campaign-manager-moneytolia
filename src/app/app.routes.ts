import { Routes } from '@angular/router';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';


export const routes: Routes = [
  // { path: '', loadChildren: () => import('./pages/home/home.routes').then(m => m.HomePageRoutes) },
  { path: 'campaigns', component: CampaignsComponent, loadChildren: () => import('./pages/campaigns/campaigns.routes').then(m => m.CampaignsPageRoutes) }
];
