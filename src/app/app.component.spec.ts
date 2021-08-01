import { ConfigService, LoadConfiguration } from '@core/services/config/config.service';
import { environment } from './../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/reducers/app.reducer';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './shared/layouts/auth/auth.module';
import { AdminModule } from './shared/layouts/admin/admin.module';
import { NotFoundPageModule } from './shared/not-found-page/not-found-page.module';
import { SplashScreenModule } from './shared/splash-screen/splash-screen.module';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';

xdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HttpClientModule,
        RouterModule,
        SplashScreenModule,
        NotFoundPageModule,
        AdminModule,
        AuthModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot({stateKey:'router'}),
        StoreDevtoolsModule.instrument({
          maxAge:25,
          logOnly: environment.production
        }),
      ],
      providers:[
        ConfigService,
        {
          provide: APP_INITIALIZER,
          useFactory: LoadConfiguration,
          deps:[ConfigService],
          multi:true
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
