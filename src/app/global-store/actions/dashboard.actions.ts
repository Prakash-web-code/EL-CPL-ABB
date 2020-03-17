import { Action } from '@ngrx/store';

// Define Action constants
export const LOAD_PLANTS = '[Plants] Load Plants';
export const LOAD_PLANTS_SUCCESS = '[Plants] Load Plants Success';
export const LOAD_PLANTS_FAIL = '[Plants] Load Plants Fail';

export const LOAD_WIDGETS = '[Widgets] Load Widgets';
export const LOAD_WIDGETS_SUCCESS = '[Widgets] Load Widgets Success';
export const LOAD_WIDGETS_FAIL = '[Widgets] Load Widgets Fail';

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
export class LoadPlants implements Action {
    readonly type = LOAD_PLANTS;
    constructor(public page: number, public offset: number)  { }
}

export class LoadPlantsSuccess implements Action {
    readonly type = LOAD_PLANTS_SUCCESS;
    constructor(public payload: any)  {}
}

export class LoadPlantsFail implements Action {
    readonly type = LOAD_PLANTS_FAIL;
    constructor(public payload: any)  {}
}

export class LoadWidgets implements Action {
    readonly type = LOAD_WIDGETS;
    constructor()  { }
}

export class LoadWidgetsSuccess implements Action {
    readonly type = LOAD_WIDGETS_SUCCESS;
    constructor(public payload: any)  {}
}

export class LoadWidgetsFail implements Action {
    readonly type = LOAD_WIDGETS_FAIL;
    constructor(public payload: any)  {}
}

/**
* @description
* Export a type alias of all actions in this action group
* so that reducers can easily compose action types
*/

export type DashboardAction = LoadPlants | LoadPlantsSuccess | LoadPlantsFail
| LoadWidgets | LoadWidgetsSuccess | LoadWidgetsFail;
