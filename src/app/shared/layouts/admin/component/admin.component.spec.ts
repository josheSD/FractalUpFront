import { PlayerModule } from './../../../player/player.module';
import { FooterModule } from './../../../footer/footer.module';
import { NavbarModule } from './../../../navbar/navbar.module';
import { SidebarModule } from './../../../sidebar/sidebar.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports:[
        CommonModule,
        RouterModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        PlayerModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
