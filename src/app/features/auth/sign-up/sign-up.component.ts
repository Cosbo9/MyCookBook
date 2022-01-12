import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(8)])
  hide = true

  constructor(private authService: AuthService, private router: Router) { }

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

  onSubmit(formData: NgForm) {
    let email = formData.form.value.uEmail
    let password = formData.form.value.uPass
    this.authService.signUp(email, password)
    this.authService.isLoggedIn().subscribe(data => {
      if (data) {
        this.router.navigate(['/'])
      }
    })
  }

}
