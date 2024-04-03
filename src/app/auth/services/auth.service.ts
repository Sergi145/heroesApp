import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environments} from "../../../env/environments";
import {User} from "../interfaces/user.interface";
import {Observable, tap, of, map, catchError} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = environments.baseURL;
  private user?:User


  constructor(private http: HttpClient) {}

  get CurrentUser():User| undefined {
    if(!this.user) return undefined;

    return structuredClone(this.user);
  }

  login(email:string, passwor:string):Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`).
      pipe(
        tap (user=> {
            this.user = user;
            localStorage.setItem('token', 'kjldjljjflsdjflsjlsj');
        })
      )
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }

  checkAutentication():Observable<boolean>  {
    if(!localStorage.getItem('token') ) return of(false);

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap (user=> this.user = user),
        map (user => !!user ),
        catchError(err => of (false))
    )


  }

}
