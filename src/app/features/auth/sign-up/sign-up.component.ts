import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(8)])
  hide = true

  constructor() { }

  ngOnInit(): void {
  }

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

  onSignUp(email: string, password: string) {}

}
