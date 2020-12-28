import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyTenComponent } from './twenty-ten.component';

describe('TwentyTenComponent', () => {
  let component: TwentyTenComponent;
  let fixture: ComponentFixture<TwentyTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
