import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArashHistoryComponent } from './arash-history.component';

describe('ArashHistoryComponent', () => {
  let component: ArashHistoryComponent;
  let fixture: ComponentFixture<ArashHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArashHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArashHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
