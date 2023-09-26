import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/register';

  constructor(private http: HttpClient) { }

  registerUser(registerRequest: any): Observable<any> {
    return this.http.post(this.apiUrl, registerRequest);
  }
}
