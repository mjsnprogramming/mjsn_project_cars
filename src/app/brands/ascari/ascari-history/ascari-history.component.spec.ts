import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscariHistoryComponent } from './ascari-history.component';

describe('AscariHistoryComponent', () => {
  let component: AscariHistoryComponent;
  let fixture: ComponentFixture<AscariHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AscariHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AscariHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
