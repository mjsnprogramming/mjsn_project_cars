import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WMotorsComponent } from './w-motors.component';

describe('WMotorsComponent', () => {
  let component: WMotorsComponent;
  let fixture: ComponentFixture<WMotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WMotorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WMotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
