import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineteenThirtyComponent } from './nineteen-thirty.component';

describe('NineteenThirtyComponent', () => {
  let component: NineteenThirtyComponent;
  let fixture: ComponentFixture<NineteenThirtyComponent>;

  beforeEach(async(() => {
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
