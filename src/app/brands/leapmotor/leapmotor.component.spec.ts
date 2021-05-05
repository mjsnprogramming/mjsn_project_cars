import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeapmotorComponent } from './leapmotor.component';

describe('LeapmotorComponent', () => {
  let component: LeapmotorComponent;
  let fixture: ComponentFixture<LeapmotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeapmotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeapmotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
