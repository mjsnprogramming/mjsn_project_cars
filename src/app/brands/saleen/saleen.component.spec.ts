import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleenComponent } from './saleen.component';

describe('SaleenComponent', () => {
  let component: SaleenComponent;
  let fixture: ComponentFixture<SaleenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
