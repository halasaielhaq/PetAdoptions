import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationServiceService {
  private apiUrl = 'http://localhost:8080/api/v1/auth'; 

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }

  isAuthenticated(): boolean {
    // Check if the user has a valid token
    const token = localStorage.getItem('jwtToken');
    return !!token; // Return true if token exists, false otherwise
  }
}