import { Injectable, NgZone, isDevMode } from '@angular/core';
import { User } from '../model/user';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';
// Add the Firebase services that you want to use
import 'firebase/auth';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * logged-in user
   *
   * @type {User}
   * @memberof AuthService
   */
  user: User;

  constructor(
    public router: Router,
    public ngZone: NgZone,
    private snackbar: MatSnackBar
  ) { }


  getCurrentUser(): Observable<User> {
    return new Observable<User>((observer) => {
      observer.next(this.user);
    });
  }

  /**
   * Log into firebase with an email and password
   *
   * @memberof AuthService
   */
  firebaseSignin(email: string, password: string) {

    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((cred) => {
      this.user = cred.user;
      this.snackbar.open(`Login success: ${cred.user.email}`, 'Dismiss');
    })
    .catch((error) => {
      this.snackbar.open('Login Failed', 'Dismiss');

      if (isDevMode()) {
        console.error(`Error thrown in auth.service.ts: ${error}`);
      }
    });
  }

  /**
   * initializes the firebase instance with env variables
   *
   * @memberof AuthService
   */
  initializeApp(): void {
    firebase.initializeApp(environment);
  }

}
