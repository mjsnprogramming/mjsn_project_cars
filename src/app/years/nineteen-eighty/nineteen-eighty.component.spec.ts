import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineteenEightyComponent } from './nineteen-eighty.component';

describe('NineteenEightyComponent', () => {
  let component: NineteenEightyComponent;
  let fixture: ComponentFixture<NineteenEightyComponent>;

  beforeEach(async(() => {
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
