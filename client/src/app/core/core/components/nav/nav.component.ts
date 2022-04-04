import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  public userID?: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // this is just in case we decide to use font awesome module for angular icons 
    this.authService.userLogged.subscribe((userID) => {
    //   this.userIcon = userID ? faUserCheck : faUser;
      this.userID = userID;
    })
  }

  public signin() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['list', this.userID]);
    } else {
      this.router.navigate(['sign-in']);
    }
  }
}
