import { Music } from '@core/interfaces/resp-music-search.interface';
import { Action } from '@ngrx/store';

export enum ERecentActions {
    GetMusicSearch = '[Music] MusicSearch',
    GetMusicSearchSuccess = '[Music] MusicSearch Success',
    GetMusicSearchFailed = '[Music] GetMusicSearchFailed Failed',
    GetMusicSearchEmpty = '[Music] GetMusicSearchFailed Empty',
    GetMusic = '[Music] GetMusic',
}

export class GetMusicSearch implements Action{
    public readonly type = ERecentActions.GetMusicSearch;
    constructor(public name:string){}
}

export class GetMusicSearchSuccess implements Action{
    public readonly type = ERecentActions.GetMusicSearchSuccess;
    constructor(public musics:Music[]){}
}

export class GetMusicSearchFailed implements Action{
    public readonly type = ERecentActions.GetMusicSearchFailed;
    constructor(public payload:any){}
}

export class GetMusicSearchEmpty implements Action{
    public readonly type = ERecentActions.GetMusicSearchEmpty;
}

export class GetMusic implements Action{
    public readonly type = ERecentActions.GetMusic;
    constructor(public music:Music){}
}

export type RecentActions = GetMusicSearch 
    | GetMusicSearchSuccess 
    | GetMusicSearchFailed 
    | GetMusicSearchEmpty
    | GetMusic;