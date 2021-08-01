import { FormControl, FormGroup, Validators } from '@angular/forms';
import { selectMusic } from './../../../store/selectors/recent.selector';
import { IAppState } from './../../../store/state/app.state';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Music } from '@core/interfaces/resp-music-search.interface';
import { ICPlayer } from '@core/interfaces/player.interface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styles: [
  ]
})
export class PlayerComponent implements OnInit, OnDestroy,ICPlayer {

  public music$:Observable<Music>;
  public music:Music;
  public audio:HTMLAudioElement;
  public subscription:Subscription;
  public form:FormGroup;
  
  constructor(
    private _store: Store<IAppState>,
  ) { }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.initializeVars();    
    this.initializeForm();
    this.initializeSubscribe();
    this.initializeVolume();
  }

  initializeVars(): void {
    this.audio = new Audio();
    this.subscription = new Subscription();
    this.music$ = this._store.pipe(select(selectMusic));
  }

  initializeForm(): void{
    this.form = new FormGroup({
      'volume': new FormControl(100,[Validators.required])
    });
  }

  initializeSubscribe(): void{
    let subscriptionMusic = new Subscription();
    subscriptionMusic = this.music$.subscribe(music => {
      this.music = music;
    });
    this.subscription.add(subscriptionMusic);
  }

  initializeVolume(): void{
    let subscriptionVolume = new Subscription();
    subscriptionVolume = this.form.get('volume').valueChanges
      .subscribe(volume =>{
        if(volume != undefined || volume != null){
          this.audio.volume = volume * 0.01;
        }
    });
    this.subscription.add(subscriptionVolume);
  }

  eventPlay(): void{
    // Remove Audio Preview
    if(this.audio?.src){
      this.audio.src = '';
    }
    // New Audio
    this.audio = new Audio(this.music.preview);
    this.audio.play();
  }


}
