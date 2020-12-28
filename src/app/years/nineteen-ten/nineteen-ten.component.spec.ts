import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineteenTenComponent } from './nineteen-ten.component';

describe('NineteenTenComponent', () => {
  let component: NineteenTenComponent;
  let fixture: ComponentFixture<NineteenTenComponent>;

  beforeEach(async(() => {
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
