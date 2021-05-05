import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PininfarinaComponent } from './pininfarina.component';

describe('PininfarinaComponent', () => {
  let component: PininfarinaComponent;
  let fixture: ComponentFixture<PininfarinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PininfarinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PininfarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
