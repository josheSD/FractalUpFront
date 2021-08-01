import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '@core/interfaces/resp-music-search.interface';

// Ngrx
import { Store, select} from '@ngrx/store';
import { selectMusic, selectMusicSearchList, selectMusicSearchListLoading } from './../../../../store/selectors/recent.selector';
import { IAppState } from './../../../../store/state/app.state';
import { ICRecent } from '@core/interfaces/recent.interface';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styles: [
  ]
})
export class RecentComponent implements OnInit, ICRecent {

  public musics$: Observable<Music[]>;
  public musicsLoading$: Observable<boolean>;
  public music$:Observable<Music>;

  constructor(
    private _store: Store<IAppState>,
  ) { }

  ngOnInit(): void {
    this.initializeVars();
  }

  initializeVars():void{
    this.music$ = this._store.pipe(select(selectMusic));
    this.musics$ = this._store.pipe(select(selectMusicSearchList));
    this.musicsLoading$ = this._store.pipe(select(selectMusicSearchListLoading));
  }

}
