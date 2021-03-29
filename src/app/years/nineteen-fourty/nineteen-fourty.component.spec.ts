import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NineteenFourtyComponent } from './nineteen-fourty.component';

describe('NineteenFourtyComponent', () => {
  let component: NineteenFourtyComponent;
  let fixture: ComponentFixture<NineteenFourtyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NineteenFourtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineteenFourtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
