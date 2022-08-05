import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrineraHistoryComponent } from './arrinera-history.component';

describe('ArrineraHistoryComponent', () => {
  let component: ArrineraHistoryComponent;
  let fixture: ComponentFixture<ArrineraHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrineraHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrineraHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
