import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GermanComponent } from './german.component';

describe('GermanComponent', () => {
  let component: GermanComponent;
  let fixture: ComponentFixture<GermanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
