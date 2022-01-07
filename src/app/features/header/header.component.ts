import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
    this.authServ.isLoggedIn().subscribe((uStatus) => {
      this.isLoggedIn = uStatus
    })
  }

  onSignOut() {
    this.authServ.signOut();
  }
}
