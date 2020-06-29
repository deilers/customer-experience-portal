import { Injectable } from '@angular/core';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';
// Add the Firebase services that you want to use
import 'firebase/auth';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public firebaseSignin(email, password): void {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((data) => {
      console.log(`user signup success: ${data.user.email}`);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  public initializeApp(): void {
    firebase.initializeApp(environment);
  }

}
