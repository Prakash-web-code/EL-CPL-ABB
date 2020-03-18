import { ActionReducerMap } from '@ngrx/store';
import * as fromDashboard from './dashboard.reducer';
import * as fromAsset from './assetpage.reducer';

export interface ContainerState {
    dashboard: fromDashboard.DashboardState;
    allAsset:fromAsset.AssetPageState;
}

export const reducers: ActionReducerMap<ContainerState> = {
    dashboard: fromDashboard.reducer,
    allAsset:fromAsset.reducer
};

