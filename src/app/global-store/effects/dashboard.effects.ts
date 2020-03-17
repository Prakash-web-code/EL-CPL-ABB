
/** @summary
 * NGRX Effects listen for actions dispatched from the NGRX Store,
 * perform some logic (e.g., a side effect), and then dispatch a new action.
 * Here effects are used for API call to retrieve data and same will be passed to reducers.
 *
 * 'ofType' filters an Observable of Actions into an observable of the actions whose type strings are passed to it.
 * 'switchMap' Map to observable, complete previous inner observable, emit values.
*/

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action} from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as DashboardAction from '../actions/dashboard.actions';
import * as fromServices from '@appServices/plant.service';

@Injectable()
export class DashboardEffects {
    constructor(
        private actions$: Actions,
        private plantService: fromServices.PlantService) { }

    @Effect()
    loadPlants$: Observable<Action> = this.actions$.pipe(
        ofType(DashboardAction.LOAD_PLANTS),
        switchMap((payload) => {
            const page = payload['page'];
            const offset = payload['offset'];
            return this.plantService
            .getPlantList(page, offset)
            .pipe(
                map(plantsList => new DashboardAction.LoadPlantsSuccess(plantsList)),
                catchError(error => of(new DashboardAction.LoadPlantsFail(error)))
            );
        })
    );

    @Effect()
    loadWidgets$: Observable<Action> = this.actions$.pipe(
        ofType(DashboardAction.LOAD_WIDGETS),
        switchMap((payload) => {
            return this.plantService.getWidgetsList()
            .map(widgetList => new DashboardAction.LoadWidgetsSuccess(widgetList)),
            catchError(error => of(new DashboardAction.LoadWidgetsFail(error)));
        })
    );

}
