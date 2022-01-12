import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(8)])
  hide = true

  constructor(public loginDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onRoute() {
    this.loginDialog.closeAll()
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

}
