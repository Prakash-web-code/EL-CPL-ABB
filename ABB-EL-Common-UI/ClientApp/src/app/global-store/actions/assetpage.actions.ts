import { Action } from '@ngrx/store';

// Define Action constants
export const LOAD_ALLASSETS = '[AssetPage] Load All Assets';
export const LOAD_ALLASSETS_SUCCESS = '[AssetPage] Load All Assets Success';
export const LOAD_ALLASSETS_FAIL = '[AssetPage] Load All Assets Fail';
export const CLEAR_ALLASSETS_DATA = '[AssetPage] Clear All Assets Data'


/**
* @description
* Every action is comprised of at least a type and an optional
* payload. Expressing actions as classes enables powerful
* type checking in reducer functions.

* NOTE : For almost every event there are three action types declared
* LOAD : When particular event load(s)/initiated.
* SUCCESS : On Successful data retrieval.
* FAILURE : Failure in data retrieval.
* @example
            LOAD -> 'LOAD_PLANT'
            SUCCESS -> 'LOAD_PLANT_SUCCESS'
            FAILURE -> 'LOAD_PLANT_FAIL'
*/
export class LoadAllAssets implements Action {
    readonly type = LOAD_ALLASSETS;
    constructor(public page: number, public offset: number,public id:any)  { }
}

export class LoadAllAssetsSuccess implements Action {
    readonly type = LOAD_ALLASSETS_SUCCESS;

    constructor(public payload: any)  {
    }
}

export class LoadAllAssetsFail implements Action {
    readonly type = LOAD_ALLASSETS_FAIL;
    constructor(public payload: any)  {}
}

export class ClearAllAssetsData implements Action {
    readonly type = CLEAR_ALLASSETS_DATA ;
    constructor()  {}
}


/**
* @description
* Export a type alias of all actions in this action group
* so that reducers can easily compose action types
*/

export type AssetPageAction = LoadAllAssets | LoadAllAssetsSuccess | LoadAllAssetsFail | ClearAllAssetsData;
