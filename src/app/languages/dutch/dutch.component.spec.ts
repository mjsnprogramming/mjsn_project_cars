import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DutchComponent } from './dutch.component';

describe('DutchComponent', () => {
  let component: DutchComponent;
  let fixture: ComponentFixture<DutchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DutchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
