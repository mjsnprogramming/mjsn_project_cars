import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeelyComponent } from './geely.component';

describe('GeelyComponent', () => {
  let component: GeelyComponent;
  let fixture: ComponentFixture<GeelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeelyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
