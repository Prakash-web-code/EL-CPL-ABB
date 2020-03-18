import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabChangeEvent, MatTableDataSource } from '@angular/material';
import { Params } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
import { PlantService } from '../../services/plant.service';
import { subscribedModule } from '@app/shared/constant/app.constant';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/global-store';


var json = {
  "ELEMENT_DATA": [
    {
      "plantType": "sites",
      "plants": "ABB Space Building",
      "user": "Admin",
      "favourites": 0,
      "id": 1,
      "subname": "ABB S.p.A Via Pescaria 5 24123 Bergamo (BG) IT\"",
      "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
      "isIcon": true
    },
    {
      "plantType": "groups",
      "plants": "Space HQ",
      "user": "Admin",
      "favourites": 0,
      "subname": "ABB S.p.A Via Pescaria 5 24123 Bergamo (BG) IT\"",
      "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
      "isIcon": true
    },
    {
      "plantType": "groups",
      "plants": "ABB Sites",
      "user": "Admin",
      "favourites": 0,
      "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
      "isIcon": false
    },
    {
      "plantType": "sites",
      "plants": "ENEL Sites",
      "id": 2,
      "user": "Admin",
      "favourites": 0,
      "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
      "checked": "checked",
      "isIcon": false
    },
    {
      "plantType": "sites",
      "plants": "ABB Plants",
      "id": 3,
      "user": "Admin",
      "favourites": 0,
      "subname": "ABB S.p.A Via Pescaria 5 24123 Bergamo (BG) IT\"",
      "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
      "checked": "nchecked",
      "isIcon": true
    },
    {
      "plantType": "sites",
      "plants": "plant building",
      "id": 4,
      "user": "Admin",
      "favourites": 0,
      "subname": "ABB S.p.A Via Pescaria 5 24123 Bergamo (BG) IT\"",
      "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
      "checked": "nchecked",
      "isIcon": true
    },
    {
      "plantType": "overview",
      "plants": "ABB Space Building",
      "user": "Admin",
      "favourites": 0,
      "subname": "ABB S.p.A Via Pescaria 5 24123 Bergamo (BG) IT\"",
      "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
      "checked": "checked",
      "isIcon": false
    },
    {
      "plantType": "favourites",
      "plants": "plant building",
      "user": "Admin",
      "favourites": 0,
      "subname": "ABB S.p.A Via Pescaria 5 24123 Bergamo (BG) IT\"",
      "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
      "checked": "checked",
      "isIcon": true
    }
  ]
};

const ELEMENT_DATA = json.ELEMENT_DATA;

@Component({
  selector: 'elcp-plant-list-dialog',
  templateUrl: './plant-list-dialog.component.html',
  styleUrls: ['./plant-list-dialog.component.css']
})
export class PlantListDialogComponent implements OnInit {

  selectedPlant;
  selectedTab = 'Overview';
  public userName = null;
  public dateTime = new Date();
  public loggedInUser: any;
  public isIcon: boolean = false;
  public subscription: Subscription[] = [];
  searchedList: any;
  starSrc: any = "assets/ABB UI Icon Package/SVG/not-selected-star.svg";
  constructor(
    public dialogRef: MatDialogRef<PlantListDialogComponent>, private plantService: PlantService, private store: Store<fromStore.ContainerState>
  ) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  displayedColumns: string[] = ['plants', 'user', 'favourites'];
  datasource = new MatTableDataSource(ELEMENT_DATA);
  getType(plantType) {
    var array = [];
    for (var i in ELEMENT_DATA) {
      if (ELEMENT_DATA[i].plantType.toLowerCase() === plantType.toLowerCase()) {
        array.push(ELEMENT_DATA[i])
      }
    }
    if(array.length == 0) {
      if(plantType == 'All') {
        this.datasource = new MatTableDataSource(ELEMENT_DATA);
        this.selectedTab = 'Overview';
      } else {
        var starred = ELEMENT_DATA.filter((value) => {
          return value.isIcon === true;
        });
        this.datasource = new MatTableDataSource(starred);
        this.selectedTab = 'Favourites';
      }
    } else {
      this.datasource = new MatTableDataSource(array);
      this.selectedTab = plantType;
    }
    if (plantType != null || plantType != undefined) {
      this.selectedPlant = plantType;
      plantType = plantType.trim(); // Remove whitespace
      plantType = plantType.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    }
  }

  ngOnInit() {
    this.selectedPlant = 'Overview';
    this.getPlantDetails();
    this.getType('All');
  }

  getPlantDetails() {

    const userDetails = JSON.parse(localStorage.getItem('currentUser'));
    this.userName = userDetails.profile.name;
    let res = this.userName.split(" ");
    this.loggedInUser = res[0].charAt(0) + res[1].charAt(0);
    this.subscription.push(this.store.select<any>(subscribedModule.dashboard).subscribe(state => {
      // if (state.data.PlantsData.Value != undefined) {

      //   //this.filterPlantDetails(ELEMENT_DATA);
      // }
    }));
    //    this.plantService.getPlantList(1,10)
    // .subscribe(
    //   state=>{
    //     if(state.data !==   undefined || state.data !=null){
    //      console.log('hi');
    //       this.filterPlantDetails(state.data.PlantsData.Value);


    //     }

    //   }
    // )

  }

  filterPlantDetails(plantData) {

    this.datasource.data = ELEMENT_DATA;
  }


  search = (value: string) => {
    this.datasource.filter = value;
  }
}
