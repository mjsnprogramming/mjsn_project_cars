import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiskerComponent } from './fisker.component';

describe('FiskerComponent', () => {
  let component: FiskerComponent;
  let fixture: ComponentFixture<FiskerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiskerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiskerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
