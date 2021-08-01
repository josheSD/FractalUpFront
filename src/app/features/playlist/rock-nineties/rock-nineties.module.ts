import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RockNinetiesRoutingModule } from './rock-nineties-routing.module';
import { RockNinetiesComponent } from './component/rock-nineties.component';


@NgModule({
  declarations: [
    RockNinetiesComponent
  ],
  imports: [
    CommonModule,
    RockNinetiesRoutingModule
  ]
})
export class RockNinetiesModule { }
