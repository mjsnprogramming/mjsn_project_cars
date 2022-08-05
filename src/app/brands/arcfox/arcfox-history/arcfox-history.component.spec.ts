import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcfoxHistoryComponent } from './arcfox-history.component';

describe('ArcfoxHistoryComponent', () => {
  let component: ArcfoxHistoryComponent;
  let fixture: ComponentFixture<ArcfoxHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcfoxHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcfoxHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
