import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private auth: AngularFireAuth) { }

  signIn(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password)
  }

  signUp(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password)
  }

  isLoggedIn(): Observable<boolean> {
    return this.auth.authState.pipe(map((data => {
      if (data === null) {
        return false;
      } else {
        return true;
      }
    })))
  }

  loggedInUser() {
    return this.auth.authState;
  }
}
