import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlovakComponent } from './slovak.component';

describe('SlovakComponent', () => {
  let component: SlovakComponent;
  let fixture: ComponentFixture<SlovakComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlovakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlovakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
