import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChryslerComponent } from './chrysler.component';

describe('ChryslerComponent', () => {
  let component: ChryslerComponent;
  let fixture: ComponentFixture<ChryslerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChryslerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChryslerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
