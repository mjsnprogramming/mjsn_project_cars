import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfaRomeoHistoryComponent } from './alfa-romeo-history.component';

describe('AlfaRomeoHistoryComponent', () => {
  let component: AlfaRomeoHistoryComponent;
  let fixture: ComponentFixture<AlfaRomeoHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfaRomeoHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlfaRomeoHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
