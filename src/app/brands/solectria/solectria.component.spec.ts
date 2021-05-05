import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolectriaComponent } from './solectria.component';

describe('SolectriaComponent', () => {
  let component: SolectriaComponent;
  let fixture: ComponentFixture<SolectriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolectriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolectriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
