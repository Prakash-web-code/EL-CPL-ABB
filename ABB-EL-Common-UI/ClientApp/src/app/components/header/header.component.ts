import { Component, OnInit, ChangeDetectorRef, Input } from "@angular/core";
import { AdalService } from "adal-angular4";
import { Subscription } from "rxjs";
import { subscribedModule } from "@appShared/constant/app.constant";
import { Store } from "@ngrx/store";
import * as fromStore from "@app/global-store";
import { MatDialog } from "@angular/material";
import { PlantListDialogComponent } from "../plant-list-dialog/plant-list-dialog.component";

@Component({
  selector: "elcp-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
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
  public plantSubName: any;
  public isMoreThanOnePlantAssociated = false;
  public loggedInUser: any;
  public plantsList: any = {};
  public countrycode: string;

  // --------------------------------------------------------------------
  // Component properties should be defined here
  // --------------------------------------------------------------------

  constructor(
    private adalSvc: AdalService,
    public dialog: MatDialog,
    changeDetector: ChangeDetectorRef,
    private store: Store<fromStore.ContainerState>
  ) {}

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
      setInterval(() => {
        var europeTime = new Date().toLocaleString("en-US", {
          timeZone: this.countrycode
        });
        console.log("europeTime", europeTime);

        this.dateTime = new Date(europeTime);
      }, 1000);
    }
  }

  getPalntsList() {
    this.subscription.push(
      this.store.select<any>(subscribedModule.dashboard).subscribe(state => {
        if (state && state.PlantsData.data.value != undefined) {
          this.plantsList = state.PlantsData.data.value[0];
          this.isMoreThanOnePlantAssociated =
            state.PlantsData.data.value.length > 1 ? true : false;
          //const country = ct.getCountry(this.plantsList.Location.CountryCode);
          //this.countrycode = country.timezones[0];
          //const ct = require('countries-and-timezones');
          var moment = require("moment-timezone");
          this.countrycode = moment.tz.zonesForCountry(
            this.plantsList.location.countryCode
          );
          this.plantSubName =
            this.plantsList.company +
            " " +
            this.plantsList.location.streetAddress +
            " " +
            this.plantsList.location.postalCode +
            " " +
            this.plantsList.location.zone +
            " " +
            this.plantsList.location.countrycode;
        }
      })
    );
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

  openDialog(): void {
    const dialogRef = this.dialog.open(PlantListDialogComponent, {
      width: "550px",
      height: "400px",
      panelClass: "dialog-style",
      position: {
        top: "10px",
        left: "150px"
      }
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
