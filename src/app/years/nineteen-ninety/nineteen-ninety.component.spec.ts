import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NineteenNinetyComponent } from './nineteen-ninety.component';

describe('NineteenNinetyComponent', () => {
  let component: NineteenNinetyComponent;
  let fixture: ComponentFixture<NineteenNinetyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NineteenNinetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineteenNinetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
