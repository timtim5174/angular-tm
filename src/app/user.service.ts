import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';

import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class UserService {
  private baseURL = window.location.origin + '/api';
  isAuthenticated: boolean;
  private options = { withCredentials: true };

  constructor(private http: HttpClient) { }

  signUp(accountData: AccountData) {
    this.isAuthenticated = false;
    return this.http.post(this.baseURL + '/users', accountData, this.options).pipe(
      map(data => this.isAuthenticated = true),
      catchError(this.handleError)
    );
  }

  signIn(authData: AuthData) {
    this.isAuthenticated = false;
    return this.http.post(this.baseURL + '/users/sign-in', authData, this.options).pipe(
      map(data => this.isAuthenticated = true),
      catchError(this.handleError)
    );
  }

  signOut() {
    this.isAuthenticated = false;
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    let msg: string;
    if (error.error && error.error.message) {
      msg = error.error.message;
    } else if (error.message) {
      msg = error.message;
    } else {
      msg = `${error.status} - ${error.statusText || ''}`;
    }
    return _throw(msg);
  }

}

export interface AuthData {
  email: string;
  password: string;
}

export interface AccountData {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}
