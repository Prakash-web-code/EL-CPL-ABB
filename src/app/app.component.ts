import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { AdalService } from 'adal-angular4';
import { PlantService } from './services/plant.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/global-store';
import { subscribedModule } from '@appShared/constant/app.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public isAuthenticated: Boolean;
  subscription: Subscription[] = [];
  public plantsCount: number;
  public showComp: boolean;

  constructor(private adalSvc: AdalService, private store: Store<fromStore.ContainerState>,
    private router: Router) {
    this.adalSvc.init(environment.adalConfig);
  }

  ngOnInit(): void {
    this.adalSvc.handleWindowCallback();
    this.isAuthenticated = this.adalSvc.userInfo.authenticated;
    if (!this.isAuthenticated) {
      this.adalSvc.login();
    }
    this.getPlantsCount();

  }

  getPlantsCount() {
    this.subscription.push(this.store.select<any>(subscribedModule.dashboard).subscribe(state => {
      if (state && state.PlantsData.data.Value !=   undefined) {
    this.plantsCount = state.PlantsData.data.Value.length;
    this.showComp = this.plantsCount == 0 ? false : true;
      }
    }));
  }
}
