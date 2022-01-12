import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { LoginDialogComponent } from 'src/app/features/auth/login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false

  constructor(private authServ: AuthService, public loginDialog: MatDialog) { }

  ngOnInit(): void {
    this.authServ.isLoggedIn().subscribe((uStatus) => {
      this.isLoggedIn = uStatus
    })
  }

  onSignOut() {
    this.authServ.signOut();
  }

  onSignIn() {
    let loginRef = this.loginDialog.open(LoginDialogComponent, {
      height: '60vh',
      width: '80vw'
    })
  }
}
