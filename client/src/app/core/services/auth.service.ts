import { Injectable } from '@angular/core';
import {
  User,
  UserSignInResponse,
  UserSignUpResponse,
} from '../models/user.models';
import { Observable, ReplaySubject, tap, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userLogged: ReplaySubject<string | undefined> = new ReplaySubject<
    string | undefined
  >();

  constructor(private httpClient: HttpClient, private router: Router) {

    const userID = this.getUserId();
    if (userID) {
      this.userLogged.next(userID)
    }

  }

  public signIn(user: User) {
    return this.httpClient
      .post<UserSignInResponse>(`${environment.baseApiURL}/sign-in`, user)
      .pipe(
        tap((res: UserSignInResponse) => {
          if (res.token) {
            // When  the user sign in successfully, then the token and the user id provide will be saved onto local storage
            const user = JSON.stringify({ token: res.token, id: res._id });
            localStorage.setItem('access_token', user);
            this.userLogged.next(res._id);
            this.router.navigate(['']);
          }
        })
      );
  }

  public signUp(user: User): Observable<UserSignUpResponse> {
    return this.httpClient.post<UserSignUpResponse>(
      `${environment.baseApiURL}/sign-up`,
      user
    );
  }

  public logOut() {
    let removeToken = localStorage.removeItem('access_token');
    this.userLogged.next(undefined);
    if (removeToken == null) {
      this.router.navigate(['']);
    }
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken != null ? true : false;
  }

  // These methods are for saving the data stored in localStorage, so that we can use them in the future.

  public getToken(): string {
    const user = localStorage.getItem('access_token');
    // Since the data comes from the localStorage, then we need to make a JSON parse to change 
    // them from string to object and then have access to the attributes token and user id
    return user ? JSON.parse(user)?.token : null;
  }

  public getUserId(): string {
    const user = localStorage.getItem('access_token');
    return user ? JSON.parse(user)?.id : null;
  }

  public getUserProfile(id: string):Observable<UserSignUpResponse> {
    return this.httpClient.get<UserSignUpResponse>(`${environment.baseApiURL}/user-profile/${id}`);
  }
}
