import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacelVegaComponent } from './facel-vega.component';

describe('FacelVegaComponent', () => {
  let component: FacelVegaComponent;
  let fixture: ComponentFixture<FacelVegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacelVegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacelVegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
