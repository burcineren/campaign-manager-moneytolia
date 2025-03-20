import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../../core/guards/auth.guard';

export const HomePageRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
];
