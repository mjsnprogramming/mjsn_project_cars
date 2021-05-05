import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrineraComponent } from './arrinera.component';

describe('ArrineraComponent', () => {
  let component: ArrineraComponent;
  let fixture: ComponentFixture<ArrineraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrineraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrineraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
