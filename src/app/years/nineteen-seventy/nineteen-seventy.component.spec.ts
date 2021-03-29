import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NineteenSeventyComponent } from './nineteen-seventy.component';

describe('NineteenSeventyComponent', () => {
  let component: NineteenSeventyComponent;
  let fixture: ComponentFixture<NineteenSeventyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NineteenSeventyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineteenSeventyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
