import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequestData, LoginResponseData } from 'src/models/models';

import { HOST } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly baseUrl = HOST + '/api/auth';

  constructor(private http: HttpClient) {}

  login(requestData: LoginRequestData) {
    return this.http.post<LoginResponseData>(
      this.baseUrl + '/login',
      requestData,
      {
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
  }

  logout() {
    return this.http.post(this.baseUrl + '/logout', null, {
      headers: {
        Authorization: '',
        'Content-Type': 'application/json',
      },
    });
  }
}
