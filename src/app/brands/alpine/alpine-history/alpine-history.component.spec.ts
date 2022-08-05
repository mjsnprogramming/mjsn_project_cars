import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpineHistoryComponent } from './alpine-history.component';

describe('AlpineHistoryComponent', () => {
  let component: AlpineHistoryComponent;
  let fixture: ComponentFixture<AlpineHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlpineHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpineHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
