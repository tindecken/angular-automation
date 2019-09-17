import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as themeReducer from '../reducers/theme.reducer'

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  theme: themeReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
