import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { RecentRoutingModule } from './recent-routing.module';
import { RecentComponent } from './component/recent.component';

// Services
import { MusicSearchService } from '@core/services/music-search/music-search.service';

// Ngrx
import { EffectsModule } from '@ngrx/effects';
import { RecentEffects } from './../../../store/effects/recent.effect';

// Interceptor
import { ApiPrefixInterceptor } from '@core/interceptors/api-prefix.interceptor';
import { MusicComponent } from './music/music.component';

@NgModule({
  declarations: [
    RecentComponent,
    MusicComponent
  ],
  imports: [
    CommonModule,
    RecentRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([RecentEffects]),
  ],
  providers:[
    MusicSearchService,
    RecentEffects,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ApiPrefixInterceptor, 
      multi: true 
    },
  ]
})
export class RecentModule { }
