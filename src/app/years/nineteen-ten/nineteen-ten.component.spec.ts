import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NineteenTenComponent } from './nineteen-ten.component';

describe('NineteenTenComponent', () => {
  let component: NineteenTenComponent;
  let fixture: ComponentFixture<NineteenTenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NineteenTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineteenTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
