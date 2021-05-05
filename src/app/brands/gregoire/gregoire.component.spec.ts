import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GregoireComponent } from './gregoire.component';

describe('GregoireComponent', () => {
  let component: GregoireComponent;
  let fixture: ComponentFixture<GregoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GregoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GregoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
