import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockNinetiesComponent } from './rock-nineties.component';

describe('RockNinetiesComponent', () => {
  let component: RockNinetiesComponent;
  let fixture: ComponentFixture<RockNinetiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockNinetiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockNinetiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
