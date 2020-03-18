import {
  Component, OnInit, ViewChildren, QueryList,
  ChangeDetectorRef, ComponentFactoryResolver, AfterViewInit
} from '@angular/core';
import {FormControl} from '@angular/forms';

/* Import for actions/effects/reducers to be used in the component. */
import { Store } from '@ngrx/store';
import * as fromStore from '@app/global-store';


/* RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code */
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

/* Import authentication service using method like, reset password, verification code*/
import { PlantService } from '@appServices/plant.service';
import { DashboardService } from '@appServices/dashboard.service';

// Import constant, model.
import { subscribedModule } from '@appShared/constant/app.constant';
import { WidgetDetails } from '@appShared/models/dashboard.model';


import { Router } from '@angular/router';

import { DashboardOutletDirective } from './dashboard-outlet.directive';
import { dashboardCards } from './dashboard.widgets';

export interface WidgetComponent {
  widgetDetails: WidgetDetails;
}

@Component({
  selector: 'elcp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  /**
   *
   *
   * @type {QueryList<DashboardOutletDirective>}
   * @memberof DashboardComponent
   * @description we need a reference to all the widget that are created from the *ngFor loops.
   * To achieve using @ViewChildren querying for the DashboardOutlet directive
   */
  @ViewChildren(DashboardOutletDirective) dashboardOutlet: QueryList<DashboardOutletDirective>;
  plantsCount: number;
  enegryMgntWidget: WidgetDetails[];
  subscription: Subscription[] = []; // Creating subscription for destroying the binding with service.


  constructor(private _PlantService: PlantService,
    private router: Router,
    private dashboardService: DashboardService,
    private cd: ChangeDetectorRef,
    private cfr: ComponentFactoryResolver,
    private store: Store<fromStore.ContainerState>, ) { }

  ngOnInit() {
    /* Dispatch action to get plant details */
    this.store.dispatch(new fromStore.LoadPlants(1, 10));
    /* Retrieving the widget from the dashboard service in the dashboard component. */
    this.dashboardService.widgets$.pipe(
      tap((widget: WidgetDetails[]) => (this.enegryMgntWidget = widget))
    ).subscribe(() => {
        this.cd.detectChanges();
        this.loadContents();
      });

    this.getPlants();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.loadContents();
  }

  loadContents = () => {
    if (!this.dashboardOutlet || !this.dashboardOutlet.length) {
      return;
    }
    this.dashboardOutlet.forEach(template => {
      this.cd.detectChanges();
      this.loadContent(template, template.widgetDetails);
    });
    this.cd.detectChanges();
  }

  loadContent = (template: DashboardOutletDirective, widgetDetails: WidgetDetails) => {

    if (!widgetDetails.templateName) {
      return;
    }

    const viewContainerRef = template.viewContainerRef;
    viewContainerRef.clear();
    const componentFactory = this.cfr.resolveComponentFactory(dashboardCards[widgetDetails.templateName]);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance = componentRef.instance as WidgetComponent;

    /* Setting the @Input/@output for component instance */
    instance.widgetDetails = widgetDetails;
  }

  /**
   * @memberof DashboardComponent
   * @description To get list of plants from dashboard state.
   */
  getPlants() {
    /** @this plantsSubscription  gets Observable to get plant state*/
    this.subscription.push(this.store.select<any>(subscribedModule.dashboard).subscribe(state => {
      if(state && state.PlantsData.data.Value !=   undefined) {
        this.plantsCount = state.PlantsData.data.Value.length;
        console.log(this.plantsCount);
        if(this.plantsCount === 0) {
          this.router.navigate(['**']);
        }
      }
    }));
  }

}
