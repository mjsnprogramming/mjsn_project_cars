import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HungarianComponent } from './hungarian.component';

describe('HungarianComponent', () => {
  let component: HungarianComponent;
  let fixture: ComponentFixture<HungarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HungarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HungarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
