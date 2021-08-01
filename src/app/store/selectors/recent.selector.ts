

import { createSelector } from '@ngrx/store';
import { Music } from '@core/interfaces/resp-music-search.interface';
import { IRecentState } from '../state/recent.state';
import { IAppState } from '../state/app.state';

const selectRecentState = (state: IAppState) => state.recent;

export const selectMusicSearchList = createSelector(
  selectRecentState,
  (state: IRecentState):Music[] => state.musics
);

export const selectMusicSearchListLoading = createSelector(
  selectRecentState,
  (state: IRecentState):boolean => state.loading
);

export const selectMusic = createSelector(
  selectRecentState,
  (state: IRecentState):Music => state.music
);

