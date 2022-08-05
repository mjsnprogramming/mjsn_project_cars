import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlvisHistoryComponent } from './alvis-history.component';

describe('AlvisHistoryComponent', () => {
  let component: AlvisHistoryComponent;
  let fixture: ComponentFixture<AlvisHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlvisHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlvisHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
