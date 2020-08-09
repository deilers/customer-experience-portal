import { Injectable, NgZone } from '@angular/core';
import { User } from '../model/user';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';
import { Observable, Subscriber, } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * logged-in user
   */
  private user: User;

  constructor(
    public router: Router,
    public ngZone: NgZone
  ) { }


  /**
   * return currently logged in user
   */
  getCurrentUser(): User {
    return this.user;
  }

  /**
   * Log into firebase with an email and password
   */
  firebaseSignin(email: string, password: string): Observable<firebase.auth.UserCredential> {

    return new Observable((observer: Subscriber<any>) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((cred) => {
        observer.next(cred);
        observer.complete();
      })
      .catch((error) => {
        observer.error(error);
      });
    });
  }

  /**
   * initializes the firebase instance with env variables
   */
  initializeApp(): void {
    firebase.initializeApp(environment);
  }
}
