import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AionHistoryComponent } from './aion-history.component';

describe('AionHistoryComponent', () => {
  let component: AionHistoryComponent;
  let fixture: ComponentFixture<AionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AionHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
