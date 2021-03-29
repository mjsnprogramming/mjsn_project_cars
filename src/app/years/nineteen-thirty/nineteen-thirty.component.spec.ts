import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NineteenThirtyComponent } from './nineteen-thirty.component';

describe('NineteenThirtyComponent', () => {
  let component: NineteenThirtyComponent;
  let fixture: ComponentFixture<NineteenThirtyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NineteenThirtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineteenThirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
