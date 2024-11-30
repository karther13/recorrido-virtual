import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/env';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl + 'auth/';

  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}login`, credentials).pipe(
      tap(response => {
        sessionStorage.setItem('token', response.access_token);
      })
    );
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}register`, user);
  }
}
