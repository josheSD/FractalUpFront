import { Music } from '@core/interfaces/resp-music-search.interface';

export interface IRecentState {
  musics: Music[];
  loading: boolean;
  error: any;
  music: Music;
}

export const initialRecentState: IRecentState = {
  musics: [],
  loading: false,
  error: null,
  music: null,
};
