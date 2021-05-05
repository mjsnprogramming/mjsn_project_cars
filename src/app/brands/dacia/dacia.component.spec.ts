import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaciaComponent } from './dacia.component';

describe('DaciaComponent', () => {
  let component: DaciaComponent;
  let fixture: ComponentFixture<DaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
