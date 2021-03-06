import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpanishComponent } from './spanish.component';

describe('SpanishComponent', () => {
  let component: SpanishComponent;
  let fixture: ComponentFixture<SpanishComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
