
import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { recentReducer } from './recent.reducer';
import { IAppState } from '../state/app.state';

export const appReducers: ActionReducerMap<IAppState, any> = {
    recent: recentReducer,
    router: routerReducer,
};
