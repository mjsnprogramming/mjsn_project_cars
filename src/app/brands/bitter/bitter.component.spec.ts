import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitterComponent } from './bitter.component';

describe('BitterComponent', () => {
  let component: BitterComponent;
  let fixture: ComponentFixture<BitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
