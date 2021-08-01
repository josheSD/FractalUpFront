import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDanceComponent } from './to-dance.component';

describe('ToDanceComponent', () => {
  let component: ToDanceComponent;
  let fixture: ComponentFixture<ToDanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
