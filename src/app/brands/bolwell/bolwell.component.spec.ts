import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolwellComponent } from './bolwell.component';

describe('BolwellComponent', () => {
  let component: BolwellComponent;
  let fixture: ComponentFixture<BolwellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolwellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolwellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
