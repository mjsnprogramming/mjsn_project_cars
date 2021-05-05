import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzingerComponent } from './czinger.component';

describe('CzingerComponent', () => {
  let component: CzingerComponent;
  let fixture: ComponentFixture<CzingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CzingerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CzingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
