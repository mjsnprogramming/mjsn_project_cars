import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HummerComponent } from './hummer.component';

describe('HummerComponent', () => {
  let component: HummerComponent;
  let fixture: ComponentFixture<HummerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HummerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
