import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HycanComponent } from './hycan.component';

describe('HycanComponent', () => {
  let component: HycanComponent;
  let fixture: ComponentFixture<HycanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HycanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HycanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
