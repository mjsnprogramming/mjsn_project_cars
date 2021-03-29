import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubCarPagesComponent } from './sub-car-pages.component';

describe('SubCarPagesComponent', () => {
  let component: SubCarPagesComponent;
  let fixture: ComponentFixture<SubCarPagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCarPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCarPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
