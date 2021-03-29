import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NineteenEightyComponent } from './nineteen-eighty.component';

describe('NineteenEightyComponent', () => {
  let component: NineteenEightyComponent;
  let fixture: ComponentFixture<NineteenEightyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NineteenEightyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineteenEightyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
