import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { LogoutAction } from '../../../states/auth-state/auth.actions';
import { AuthState } from '../../../states/auth-state/auth.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router, private store: Store) { }
  logout(): void {
    this.store.dispatch(new LogoutAction()).subscribe(() => {
      console.log('Çıkış yapıldı!');
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    });
  }
}
