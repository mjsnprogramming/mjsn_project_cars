import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzechRepublicComponent } from './czech-republic.component';

describe('CzechRepublicComponent', () => {
  let component: CzechRepublicComponent;
  let fixture: ComponentFixture<CzechRepublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CzechRepublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CzechRepublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
