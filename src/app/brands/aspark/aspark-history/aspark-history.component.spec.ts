import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsparkHistoryComponent } from './aspark-history.component';

describe('AsparkHistoryComponent', () => {
  let component: AsparkHistoryComponent;
  let fixture: ComponentFixture<AsparkHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsparkHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsparkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
