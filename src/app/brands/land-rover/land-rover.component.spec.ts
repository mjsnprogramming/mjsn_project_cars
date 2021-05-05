import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandRoverComponent } from './land-rover.component';

describe('LandRoverComponent', () => {
  let component: LandRoverComponent;
  let fixture: ComponentFixture<LandRoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandRoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandRoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
