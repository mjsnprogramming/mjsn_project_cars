import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanozComponent } from './panoz.component';

describe('PanozComponent', () => {
  let component: PanozComponent;
  let fixture: ComponentFixture<PanozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanozComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
