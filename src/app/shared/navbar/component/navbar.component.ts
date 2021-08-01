import { IAppState } from './../../../store/state/app.state';
import { GetMusicSearch, GetMusicSearchEmpty } from './../../../store/actions/recent.action';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICNavbar } from '@core/interfaces/navbar.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit, OnDestroy, ICNavbar {

  public form:FormGroup;
  public subscription:Subscription;

  constructor(
    private _store: Store<IAppState>,
  ) { }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
    this._store.dispatch(new GetMusicSearchEmpty());
  }

  ngOnInit(): void {
    this.initializeVars();
    this.initializeForm();
    this.initializeSubscribe();
  }

  initializeVars():void{
    this.subscription = new Subscription();
  }

  initializeForm():void{
    this.form = new FormGroup({
      'search': new FormControl(null,[Validators.required])
    });
  }

  initializeSubscribe():void{
    this.subscription = this.form.get('search').valueChanges
      .subscribe((value:string) =>{
        if(value!){
          this._store.dispatch(new GetMusicSearch(value));
        }
      });
  }
}
