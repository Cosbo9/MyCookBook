import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  formGroup?: FormGroup
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(8)])
  passwordConf = new FormControl('', [Validators.required])
  signIn = true
  hide = true

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    // trying to get password confermation validator going
    // this.formGroup = this.formBuilder.group({
    //   password: ['', [Validators.required, Validators.minLength(8)]],
    //   passwordConf: ['', [Validators.required]]
    // })
  }

  onSignIn(email: string, password: string) {
    console.log(email, password)
    this.authServ.signIn(email, password)
    if (this.authServ.isLoggedIn()) {
      this.router.navigate(['/'])
    }
  }

  onSignUp(email: string, password: string) {
    console.log(email, password)
    this.authServ.signUp(email, password)
    if (this.authServ.isLoggedIn()) {
      this.router.navigate(['/'])
    }
  }

  // error messages for Validators
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value'
    }
    return this.email.hasError('email') ? 'Not a valid email' : ''
  }

  getPassErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value'
    }
    return this.password.hasError('minlength') ? 'Password must be 8 characters' : ''
  }

  checkPassErrorMessage() {
    if (this.passwordConf.hasError('required')) {
      return 'You must enter a value'
    }
    return
  }
  // error messages end
}
