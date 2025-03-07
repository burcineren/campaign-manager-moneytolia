import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStateModel } from '../states/auth-state/auth.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthStateModel> {
    return this.http.post<AuthStateModel>(`${this.apiUrl}/login`, { email, password });
  }
}
