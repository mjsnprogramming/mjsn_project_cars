import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K1EngineeringComponent } from './k1-engineering.component';

describe('K1EngineeringComponent', () => {
  let component: K1EngineeringComponent;
  let fixture: ComponentFixture<K1EngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ K1EngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(K1EngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
