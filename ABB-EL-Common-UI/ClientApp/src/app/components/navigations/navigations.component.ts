import { Component, OnInit, Input } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { Router } from '@angular/router';

@Component({
  selector: 'elcp-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss']
})



export class NavigationsComponent implements OnInit {
  color = "red";
  @Input() showMenu: boolean;
  public isAuthenticated = false;
  btnColour: string;
  dashboardActive :boolean = false;
  assetsActive :boolean = false;

  constructor(private adalSvc: AdalService, private router: Router, ) { }

  ngOnInit() {
    this.isAuthenticated = this.adalSvc.userInfo.authenticated;
  }
  change(btn) {
    if(btn === 'assetsActive'){
      this.dashboardActive =false;
      this.assetsActive = true;
    }
    else if(btn === 'dashboardActive'){
      this.dashboardActive =true;
      this.assetsActive = false;
    }
  }
  navigationTo(navigationPath:string){
    this.router.navigate([navigationPath]);
  }
}
