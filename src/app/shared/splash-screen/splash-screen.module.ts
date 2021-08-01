import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './component/splash-screen.component';


@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SplashScreenComponent
  ]
})
export class SplashScreenModule { }
