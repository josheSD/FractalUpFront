import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaladsComponent } from './balads.component';

describe('BaladsComponent', () => {
  let component: BaladsComponent;
  let fixture: ComponentFixture<BaladsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaladsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaladsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
