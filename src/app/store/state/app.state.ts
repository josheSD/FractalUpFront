import { RouterReducerState } from '@ngrx/router-store';
import { initialRecentState, IRecentState } from './recent.state';


export interface IAppState {
  router?: RouterReducerState;
  recent: IRecentState;
}

export const initialAppState: IAppState = {
  recent: initialRecentState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
