import * as fromAssetPage from '../actions/assetpage.actions';
import { from } from 'rxjs';

export interface AssetPage {
    AllAssetsData: [];
}

export interface AssetPageState {
    data: AssetPage;
    loaded: boolean;
    loading: boolean;
  }

  export const initialState: AssetPageState = {
    data: {
        AllAssetsData: [],
    },
    loaded: false,
    loading: false,
  };


  export function reducer(
    state = initialState,
    action: fromAssetPage.AssetPageAction
  ): AssetPageState {
    switch (action.type) {
      case fromAssetPage.LOAD_ALLASSETS: {
        return {
          ...state,
          loading: true,
          loaded: false
        };
      }
      case fromAssetPage.LOAD_ALLASSETS_SUCCESS: {
        const  data = action.payload;           
        return {
          ...state,
          loading: false,
          loaded: true,
          data: { AllAssetsData: data }
        };
      }
      case fromAssetPage.LOAD_ALLASSETS_FAIL: {
        return {
          ...state,
          loading: false,
          loaded: false
        };
      }

      case fromAssetPage.CLEAR_ALLASSETS_DATA:{
        return {
          ...state,
          data:{AllAssetsData : []}
        }
      }
    }
    return state;
  }
