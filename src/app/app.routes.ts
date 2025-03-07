import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.routes').then(m => m.LoginPageRoutes) },
  { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./pages/home/home.routes').then(m => m.HomePageRoutes) },
  { path: 'campaigns', canActivate: [AuthGuard], loadChildren: () => import('./pages/campaigns/campaigns.routes').then(m => m.CampaignsPageRoutes) },
  { path: '**', redirectTo: '/login' }
];
