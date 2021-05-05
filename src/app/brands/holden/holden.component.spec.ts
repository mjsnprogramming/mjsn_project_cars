import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldenComponent } from './holden.component';

describe('HoldenComponent', () => {
  let component: HoldenComponent;
  let fixture: ComponentFixture<HoldenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
