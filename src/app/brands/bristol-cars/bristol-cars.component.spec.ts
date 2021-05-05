import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BristolCarsComponent } from './bristol-cars.component';

describe('BristolCarsComponent', () => {
  let component: BristolCarsComponent;
  let fixture: ComponentFixture<BristolCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BristolCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BristolCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
