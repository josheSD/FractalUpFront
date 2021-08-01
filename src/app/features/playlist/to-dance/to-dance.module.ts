import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDanceRoutingModule } from './to-dance-routing.module';
import { ToDanceComponent } from './component/to-dance.component';


@NgModule({
  declarations: [
    ToDanceComponent
  ],
  imports: [
    CommonModule,
    ToDanceRoutingModule
  ]
})
export class ToDanceModule { }
