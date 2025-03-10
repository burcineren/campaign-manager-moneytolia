import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { AuthStateModel } from '../states/auth-state/auth.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER = {
    username: 'moneytolia',
    password: '12345',
  };
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    const isValid = (username === this.USER.username && password === this.USER.password);
    if (isValid) {
      localStorage.setItem('isAuthenticated', 'true');
    }
    return of(isValid).pipe(
      tap(success => {
        if (!success) {
          localStorage.setItem('isAuthenticated', 'false');
          console.error('Giriş başarısız!');
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.setItem('isAuthenticated', 'false');
    console.log('Çıkış yapıldı.');
  }
}
