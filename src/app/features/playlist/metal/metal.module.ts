import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetalRoutingModule } from './metal-routing.module';
import { MetalComponent } from './component/metal.component';


@NgModule({
  declarations: [
    MetalComponent
  ],
  imports: [
    CommonModule,
    MetalRoutingModule
  ]
})
export class MetalModule { }
