import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted: boolean;

  constructor(
    private authService: AuthService) { }


  ngOnInit(): void {

    this.isSubmitted = false;

    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(): void {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.firebaseSignin(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }

  get formControls() { return this.loginForm.controls; }

}
