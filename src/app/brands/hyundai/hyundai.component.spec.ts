import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyundaiComponent } from './hyundai.component';

describe('HyundaiComponent', () => {
  let component: HyundaiComponent;
  let fixture: ComponentFixture<HyundaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyundaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyundaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
