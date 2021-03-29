import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { YearsComponent } from './years.component';

describe('YearsComponent', () => {
  let component: YearsComponent;
  let fixture: ComponentFixture<YearsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ YearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
