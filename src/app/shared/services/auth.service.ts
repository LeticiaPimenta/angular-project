import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:9000';

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/api/login`, { email, password }).pipe(
      tap((response: any) => {
        // Assuming the token comes in the response (adjust this as needed)
        localStorage.setItem('authToken', response.token);
      })
    );
  }
}
