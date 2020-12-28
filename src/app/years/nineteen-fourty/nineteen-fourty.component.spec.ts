import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineteenFourtyComponent } from './nineteen-fourty.component';

describe('NineteenFourtyComponent', () => {
  let component: NineteenFourtyComponent;
  let fixture: ComponentFixture<NineteenFourtyComponent>;

  beforeEach(async(() => {
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
