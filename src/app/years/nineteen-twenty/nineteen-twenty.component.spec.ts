import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineteenTwentyComponent } from './nineteen-twenty.component';

describe('NineteenTwentyComponent', () => {
  let component: NineteenTwentyComponent;
  let fixture: ComponentFixture<NineteenTwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NineteenTwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineteenTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
