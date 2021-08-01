import { ERecentActions, RecentActions } from "../actions/recent.action";
import { initialRecentState, IRecentState } from "../state/recent.state";

export const recentReducer = (
    state = initialRecentState, 
    action: RecentActions
): IRecentState => {
    switch(action.type){
        case ERecentActions.GetMusicSearch:
            return {
                ...state,
                musics: [],
                loading: true,
                error: null
            };
        case ERecentActions.GetMusicSearchSuccess:
            return {
                ...state,
                musics: [...action.musics],
                loading: false,
                error: null
            }
        case ERecentActions.GetMusicSearchFailed:
            return {
                ...state,
                musics: [],
                loading: false,
                error: action.payload
            }
        case ERecentActions.GetMusicSearchEmpty:
            return {
                ...state,
                musics: [],
                loading: false,
                error: null,
                music: null
            }
        case ERecentActions.GetMusic:
            return {
                ...state,
                music: action.music
            }
        default: 
            return state;
    }
}