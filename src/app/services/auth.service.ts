import { Injectable } from '@angular/core';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';
// Add the Firebase services that you want to use
import 'firebase/auth';
import { environment } from '../../environments/environment.prod';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private snackbar: MatSnackBar) { }

  public firebaseSignin(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((data) => {
      console.log(`user signin success: ${data.user.email}`);
    })
    .catch(() => {
      console.error(`user signin failure`);
    });
  }

  public initializeApp(): void {
    firebase.initializeApp(environment);
  }

}
