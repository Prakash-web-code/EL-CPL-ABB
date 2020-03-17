import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'elcp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuthenticated = false;

  constructor(
    private adalSvc: AdalService
  ) {
    console.log(this.isAuthenticated);
    this.isAuthenticated = this.adalSvc.userInfo.authenticated;
    console.log(this.isAuthenticated);
  }

  ngOnInit() {

  }

  loginAD() {
    if (!this.isAuthenticated) {
      this.adalSvc.login();
    }
    console.log(this.isAuthenticated);
  }

  logoutAD() {
    if (this.isAuthenticated) {
      this.adalSvc.logOut();
    }
  }

}
