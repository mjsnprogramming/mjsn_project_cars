import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AixamHistoryComponent } from './aixam-history.component';

describe('AixamHistoryComponent', () => {
  let component: AixamHistoryComponent;
  let fixture: ComponentFixture<AixamHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AixamHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AixamHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
