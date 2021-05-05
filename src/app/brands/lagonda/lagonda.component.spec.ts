import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagondaComponent } from './lagonda.component';

describe('LagondaComponent', () => {
  let component: LagondaComponent;
  let fixture: ComponentFixture<LagondaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagondaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LagondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
