import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QvaleComponent } from './qvale.component';

describe('QvaleComponent', () => {
  let component: QvaleComponent;
  let fixture: ComponentFixture<QvaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QvaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QvaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
