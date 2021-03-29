import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NineteenComponent } from './nineteen.component';

describe('NineteenComponent', () => {
  let component: NineteenComponent;
  let fixture: ComponentFixture<NineteenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NineteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
