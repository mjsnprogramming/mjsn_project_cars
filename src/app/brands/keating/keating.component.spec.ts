import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeatingComponent } from './keating.component';

describe('KeatingComponent', () => {
  let component: KeatingComponent;
  let fixture: ComponentFixture<KeatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
