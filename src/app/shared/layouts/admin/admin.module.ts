import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './component/admin.component';

//Shared
import { FooterModule } from './../../footer/footer.module';
import { NavbarModule } from './../../navbar/navbar.module';
import { SidebarModule } from './../../sidebar/sidebar.module';
import { PlayerModule } from '../../player/player.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    PlayerModule
  ],
  exports:[
    AdminComponent
  ]
})
export class AdminModule { }
