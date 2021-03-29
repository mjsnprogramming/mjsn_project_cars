import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PolishComponent } from './polish.component';

describe('PolishComponent', () => {
  let component: PolishComponent;
  let fixture: ComponentFixture<PolishComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PolishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
