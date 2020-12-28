import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineteenFiftyComponent } from './nineteen-fifty.component';

describe('NineteenFiftyComponent', () => {
  let component: NineteenFiftyComponent;
  let fixture: ComponentFixture<NineteenFiftyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NineteenFiftyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineteenFiftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
