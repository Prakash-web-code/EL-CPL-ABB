import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import * as fromStore from '@app/global-store';
import { Store } from '@ngrx/store';
import { MatSort } from '@angular/material/sort';


/* RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code */
import { Subscription } from 'rxjs';

import { subscribedModule } from '@appShared/constant/app.constant';
//import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'elcp-all-assets',
  templateUrl: './all-assets.component.html',
  styleUrls: ['./all-assets.component.scss'],
})
export class AllAssetsComponent implements OnInit{

  //@ViewChild('myDiv',{static: false}) myDiv: ElementRef;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("myDiv",{static: false}) divView: ElementRef;
  Plant_id: null;
  pageNumber:number = 1;
  lastPageReached:boolean = false;
  ajaxCallDone:boolean = false;
  //newArray : any[] ;
  allAssetsArrayData: any[];
  displayedColumns: string[] = ['name', 'condition', 'connection', 'class', 'manufacturer', 'model', 'serialNumber', 'healthIndex'];
  //dataSource = this.allAssetsArrayData;
  dataSource = this.allAssetsArrayData;//thisnew MatTableDataSource(this.allAssetsArrayData);
  subscription: Subscription[] = []; // Creating subscription for destroying the binding with service.


  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private store: Store<fromStore.ContainerState>) {
    this.matIconRegistry.addSvgIcon(
      `connected_icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/connected.svg")

    );
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadPlants(1, 10));
    this.subscription.push(this.store.select<any>(subscribedModule.dashboard).subscribe(state => {
      if (state && state.PlantsData.loaded && state.PlantsData.data.Value[0]) {
        //console.log('popopopopopopopopo');
        //console.log("last page reached:"+this.lastPageReached);
        this.Plant_id = state.PlantsData.data.Value[0].Id;
        //console.log(this.Plant_id);
        this.store.dispatch(new fromStore.LoadAllAssets(this.pageNumber,10, this.Plant_id));
        this.getAssetsData();
      }
    })
    );

  }

  getAssetsData(){    
    this.subscription.push(this.store.select<any>(subscribedModule.allAsset).subscribe(state => {
      console.log('jdbfghjvdhvbdv')
      if (state && state.loaded && state.data.AllAssetsData.Value) {
        console.log(state.data.AllAssetsData.Value.length);
        if(state.data.AllAssetsData.Value.length<10){
          this.lastPageReached= true;
        }        
        this.allAssetsArrayData = state.data.AllAssetsData.Value.map(obj => JSON.parse(JSON.stringify(obj)));
        let newArray;
        if(!this.dataSource){
          newArray = [
            ...this.allAssetsArrayData
          ]
        }
        else{
          newArray = [
            ...this.dataSource,
            ...this.allAssetsArrayData,
          ];
        }
        this.dataSource = newArray;
        this.pageNumber = this.pageNumber + 1;
        console.log(newArray);
        this.ajaxCallDone = false;
      }
      
    }))
  }

  ngOnDestroy() {
    this.store.dispatch(new fromStore.ClearAllAssetsData());
    this.subscription.forEach(subs => subs.unsubscribe());
    this.subscription = [];
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    let contentHeight = this.divView.nativeElement.offsetHeight;
    let yOffset = $event.path[1].pageYOffset;
    let totalheight = yOffset + $event.path[1].innerHeight;
    console.log(totalheight > contentHeight);
    if(totalheight > contentHeight){      
      if(!this.lastPageReached && !this.ajaxCallDone){
          this.ajaxCallDone= true;
          this.store.dispatch(new fromStore.LoadAllAssets(this.pageNumber,10, this.Plant_id));
        }
    }
  }
}

