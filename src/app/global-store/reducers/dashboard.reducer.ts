/** @summary
 *  Reducers are pure functions that create a new state.
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

import * as fromDashboard from '../actions/dashboard.actions';

export interface Dashboard {
  PlantsData: [];
  widgetData: [];
}

export interface DashboardState {
  PlantsData: { data: {}, loaded: boolean, loading: boolean };
  widgetData: { data: {}, loaded: boolean, loading: boolean };
}

export const initialState: DashboardState = {
  PlantsData: { data: [], loaded: false, loading: false },
  widgetData: { data: [], loaded: false, loading: false }
};

export function reducer(
  state = initialState,
  action: fromDashboard.DashboardAction
): DashboardState {
  switch (action.type) {
    case fromDashboard.LOAD_PLANTS: {
      return {
        ...state, PlantsData: {
          ...state.PlantsData,
          loading: true
        }
      };
    }
    case fromDashboard.LOAD_PLANTS_SUCCESS: {
      const data = action.payload;
      return {
        ...state, PlantsData: {
          ...state.PlantsData,
          data: data, loading: false, loaded: true
        }
      };
    }
    case fromDashboard.LOAD_PLANTS_FAIL: {
      return {
        ...state, PlantsData: {
          ...state.PlantsData,
          loading: false, loaded: false,
        }
      };
    }
    case fromDashboard.LOAD_WIDGETS: {
      return {
        ...state, widgetData: {
          ...state.widgetData,
          loading: true
        }
      };
    }
    case fromDashboard.LOAD_WIDGETS_SUCCESS: {
      const data = action.payload;
      return {
        ...state, widgetData: {
          ...state.widgetData,
          data: data, loading: false, loaded: true
        }
      };
    }
    case fromDashboard.LOAD_WIDGETS_FAIL: {
      return {
        ...state, widgetData: {
          ...state.widgetData,
          loading: false, loaded: false,
        }
      };
    }
      return state;
  }
}
