import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/dialogs/user';
import { AUTH_ID } from './app.constants';
import { Login } from 'src/app/dialogs/login';
import { environment } from 'src/app/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService  {
  // constructor(public router: Router) {}
  user: User | undefined
  httpHeaders: HttpHeaders
  constructor(private httpClient: HttpClient,public router: Router) {
      this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' })
      this.loadUser()
  }
  private loadUser() {
      const data = localStorage.getItem(AUTH_ID)
      if (data != undefined)
          this.user = JSON.parse(data)
      else
          this.user = undefined
  }
  ValidateUser(model: Login): Observable<HttpResponse<User>> {
      return this.httpClient.post<User>(environment.apiAddress + "/auth/validateuser",
          JSON.stringify(model),
          { headers: this.httpHeaders, observe: 'response' })
  }
  SetAuthUser(user: User) {
      localStorage.setItem(AUTH_ID, JSON.stringify(user))
      this.loadUser()
  }
  RemoveAuthUser() {
      const data = localStorage.getItem(AUTH_ID)
      if (data != undefined)
          localStorage.removeItem(AUTH_ID)
      this.loadUser()
  }
}
