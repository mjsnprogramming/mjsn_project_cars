import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadianHistoryComponent } from './acadian-history.component';

describe('AcadianHistoryComponent', () => {
  let component: AcadianHistoryComponent;
  let fixture: ComponentFixture<AcadianHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadianHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadianHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
