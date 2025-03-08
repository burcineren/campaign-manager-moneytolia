import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { AuthStateModel } from '../states/auth-state/auth.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.get<any[]>(`${this.apiUrl}/user?username=${username}&password=${password}`).pipe(
      map((users) => {
        if (users.length > 0) {
          const token = `fake-jwt-token-${users[0].id}`;
          return { token };
        } else {
          throw new Error('Geçersiz isim veya şifre!');
        }
      }),
      tap((response) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('isAuthenticated', 'true');
        }
      }),
      catchError((error) => {
        console.error('Giriş başarısız:', error.message);
        return throwError(() => new Error('Giriş başarısız! Lütfen tekrar deneyin.'));
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
