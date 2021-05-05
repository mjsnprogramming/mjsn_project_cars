import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggComponent } from './togg.component';

describe('ToggComponent', () => {
  let component: ToggComponent;
  let fixture: ComponentFixture<ToggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
