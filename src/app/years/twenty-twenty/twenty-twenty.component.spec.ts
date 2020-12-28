import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyTwentyComponent } from './twenty-twenty.component';

describe('TwentyTwentyComponent', () => {
  let component: TwentyTwentyComponent;
  let fixture: ComponentFixture<TwentyTwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyTwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
