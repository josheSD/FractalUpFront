import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './component/not-found-page.component';



@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NotFoundPageComponent
  ]
})
export class NotFoundPageModule { }
