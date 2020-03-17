import { ActionReducerMap } from '@ngrx/store';
import * as fromDashboard from './dashboard.reducer';

export interface ContainerState {
    dashboard: fromDashboard.DashboardState;
}

export const reducers: ActionReducerMap<ContainerState> = {
    dashboard: fromDashboard.reducer,
};

