
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
import * as AssetPageAction from '../actions/assetpage.actions';
import * as fromServices from '@appServices/assetpage.service';

@Injectable()
export class assetPageEffects {
    constructor(
        private actions$: Actions,
        private assetPageService: fromServices.AssetpageService) { }

    @Effect()
    loadAssetPage$: Observable<Action> = this.actions$.pipe(
        ofType(AssetPageAction.LOAD_ALLASSETS),
        switchMap((payload) => {
            const page = payload['page'];
            const offset = payload['offset'];
            const id =  payload['id'];
            return this.assetPageService
            .getAllAssets(page, offset,id)
            .pipe(
                map(assetPage =>{
                    return new AssetPageAction.LoadAllAssetsSuccess(assetPage)
                } ),
                catchError(error => {
                    console.log(error);
                    return of(new AssetPageAction.LoadAllAssetsFail(error))})
            );
        })
    );
}
