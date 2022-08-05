import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArielHistoryComponent } from './ariel-history.component';

describe('ArielHistoryComponent', () => {
  let component: ArielHistoryComponent;
  let fixture: ComponentFixture<ArielHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArielHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArielHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
