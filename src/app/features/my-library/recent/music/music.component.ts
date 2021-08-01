import { GetMusic } from './../../../../store/actions/recent.action';
import { IAppState } from './../../../../store/state/app.state';
import { Component, Input } from '@angular/core';
import { ICMusic } from '@core/interfaces/music.interface';
import { Music } from '@core/interfaces/resp-music-search.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styles: [
  ]
})
export class MusicComponent implements ICMusic{

  @Input() music:Music;

  constructor(
    private _store: Store<IAppState>,
  ) {}

  eventSelectMusic(){
    this._store.dispatch(new GetMusic(this.music));
  }

}
