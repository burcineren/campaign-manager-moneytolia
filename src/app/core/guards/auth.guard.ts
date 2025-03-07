

import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from '../states/auth-state/auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private store = inject(Store);
  private router = inject(Router);
  canActivate(): boolean {
    const isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);

    if (!isAuthenticated) {
      console.warn('Erişim reddedildi! Giriş yapmalısınız.');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}

