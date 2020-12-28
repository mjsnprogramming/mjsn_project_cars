import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CzechComponent } from './czech.component';

describe('CzechComponent', () => {
  let component: CzechComponent;
  let fixture: ComponentFixture<CzechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CzechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CzechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
