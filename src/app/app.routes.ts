import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CreateCampaignComponent } from './pages/create-campaign/create-campaign.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.routes').then(m => m.LoginPageRoutes) },
  { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./pages/home/home.routes').then(m => m.HomePageRoutes) },
  { path: 'campaigns', loadChildren: () => import('./pages/campaigns/campaigns.routes').then(m => m.CampaignsPageRoutes) },
  { path: 'create', loadChildren: () => import('./pages/create-campaign/create-campaign.routes').then(m => m.CreateCampaignPageRoutes) },

  { path: '**', redirectTo: '/login' }
];
