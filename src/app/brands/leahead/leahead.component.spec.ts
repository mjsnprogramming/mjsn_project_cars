import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaheadComponent } from './leahead.component';

describe('LeaheadComponent', () => {
  let component: LeaheadComponent;
  let fixture: ComponentFixture<LeaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
