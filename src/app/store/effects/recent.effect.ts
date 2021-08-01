import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MusicSearchService } from '@core/services/music-search/music-search.service';
import { ERecentActions, GetMusicSearch, GetMusicSearchFailed, GetMusicSearchSuccess } from '../actions/recent.action';

@Injectable()
export class RecentEffects{

    constructor(
        private action$: Actions,
        private _musicSearchService:MusicSearchService,
    ){}

    loadMusicSearch$ = createEffect(() =>
        this.action$.pipe(
            ofType(ERecentActions.GetMusicSearch),
            exhaustMap((action:GetMusicSearch) => this._musicSearchService.getMusicSearchByName(action.name)
                .pipe(
                    map((resp) =>{
                        return new GetMusicSearchSuccess(resp.data)
                    }),
                    catchError((err:HttpErrorResponse) =>{
                        return of(new GetMusicSearchFailed(err))
                    })
                )
            )
        )
    );

}