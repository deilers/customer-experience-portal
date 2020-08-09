import { Injectable, isDevMode } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Constants } from '../constants/const';

@Injectable({
  providedIn: 'root'
})
export class UserFeedbackService {


  constructor(
    private snackbar: MatSnackBar
  ) { }

  /**
   * writes error log to browser console if angular is in development-mode
   */
  devModeLogging(message: string): void {
    if (isDevMode()) {
      console.error(message);
    }
  }

  /**
   * displays login failure snackbar on page
   */
  failedLogin(): void {
    this.snackbar.open('Login Failed', Constants.DISMISS_SNACKBAR);
  }

  /**
   * displays login success snackbar on page
   */
  successLogin(email: string): void {
    this.snackbar.open(`Login success: ${email}`, Constants.DISMISS_SNACKBAR);
  }
}
