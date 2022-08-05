import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuraHistoryComponent } from './acura-history.component';

describe('AcuraHistoryComponent', () => {
  let component: AcuraHistoryComponent;
  let fixture: ComponentFixture<AcuraHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcuraHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuraHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
