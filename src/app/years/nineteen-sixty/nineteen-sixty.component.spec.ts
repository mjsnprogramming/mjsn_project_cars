import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NineteenSixtyComponent } from './nineteen-sixty.component';

describe('NineteenSixtyComponent', () => {
  let component: NineteenSixtyComponent;
  let fixture: ComponentFixture<NineteenSixtyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NineteenSixtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineteenSixtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
