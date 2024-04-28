import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:8090";
  private tokenKey = 'auth_token';
  constructor(private http: HttpClient) { }

  register(email: string, password: string, firstname: string, lastname: string): Observable<String> {
    const registerUrl = `${this.apiUrl}/rest/auth/register`;
    return this.http.post(registerUrl, { email, password, firstname, lastname }, { responseType: 'text' });
  }
  login(email: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/rest/auth/login`;
    return this.http.post(loginUrl, { email, password });
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }

  isAdmin(): boolean {
    return (sessionStorage.getItem('auth_email') === "admin@example.com");
  }
  setToken(token: string, email: string): void {
    sessionStorage.setItem(this.tokenKey, token);
    sessionStorage.setItem("auth_email", email);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  removeTokens(): void {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem("auth_email");
  }

}
