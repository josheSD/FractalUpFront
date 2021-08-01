import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Services
import { MusicSearchService } from '@core/services/music-search/music-search.service';

// Ngrx
import { EffectsModule } from '@ngrx/effects';
import { RecentEffects } from './../../store/effects/recent.effect';

// INterceptor
import { ApiPrefixInterceptor } from '@core/interceptors/api-prefix.interceptor';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([RecentEffects]),
  ],
  exports:[
    NavbarComponent
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
export class NavbarModule { }
