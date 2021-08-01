import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaladsRoutingModule } from './balads-routing.module';
import { BaladsComponent } from './component/balads.component';


@NgModule({
  declarations: [
    BaladsComponent
  ],
  imports: [
    CommonModule,
    BaladsRoutingModule
  ]
})
export class BaladsModule { }
