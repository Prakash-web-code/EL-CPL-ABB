import { Component, OnInit, ChangeDetectorRef, Input, HostListener } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { Subscription } from 'rxjs';
import { subscribedModule } from '@appShared/constant/app.constant';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/global-store';

@Component({
  selector: 'elcp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  @Input() showPlantslist: boolean;

  // --------------------------------------------------------------------
  // Component Variables are defined here
  // --------------------------------------------------------------------

  public isAuthenticated = false;
  public userName = null;
  public dateTime = new Date();
  public subscription: Subscription[] = [];
  public plantSubName : any;  
  public isMoreThanOnePlantAssociated = false;
  public loggedInUser: any;
  public plantsList: any = {};



  // --------------------------------------------------------------------
  // Component properties should be defined here
  // --------------------------------------------------------------------


  /**
   * get the live system time.
   */
  get now(): string { return new Date().getHours() + ':' + new Date().getMinutes(); }

  constructor(private adalSvc: AdalService, private changeDetector: ChangeDetectorRef, private store: Store<fromStore.ContainerState>) {
    setInterval(function () { changeDetector.detectChanges(); }, 1);
  }


  // --------------------------------------------------------------------
  // Lifecycle hooks goes here.
  // --------------------------------------------------------------------

  ngOnInit() {
    this.isAuthenticated = this.adalSvc.userInfo.authenticated;
    if (this.isAuthenticated) {
      this.userName = this.adalSvc.userInfo.profile.name;
      let res = this.userName.split(" ");
      this.loggedInUser = res[0].charAt(0) + res[1].charAt(0);
      this.getPalntsList();
    }
   
  }

  getPalntsList() {
    this.subscription.push(this.store.select<any>(subscribedModule.dashboard).subscribe(state => {    
      if(state && state.PlantsData.data.Value !=   undefined){
        this.plantsList = state.PlantsData.data.Value[0];
        this.isMoreThanOnePlantAssociated = state.PlantsData.data.Value.length > 1 ? true:false;

        var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Amsterdam"});
        this.dateTime = new Date(indiaTime);

        this.plantSubName= this.plantsList.Company + ' ' +
        this.plantsList.Location.StreetAddress + ' ' +
        this.plantsList.Location.PostalCode + ' ' +
        this.plantsList.Location.Zone + ' ' +
        this.plantsList.Location.CountryCode; 

        console.log("DATETIME : ", this.dateTime);
        console.log('***', this.plantsList)
      }
    }));
  }


  // --------------------------------------------------------------------
  // event funtions goes here.
  // --------------------------------------------------------------------


  /**
   * login event for the active directory.
   */
  public loginAD() {
    if (!this.isAuthenticated) {
      this.adalSvc.login();
    }
  }

  /**
   * logout event from the the active directory
   */
  public logoutAD() {
    if (this.isAuthenticated) {
      this.adalSvc.logOut();
    }
  }

}
