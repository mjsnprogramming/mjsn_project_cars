import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstonMartinHistoryComponent } from './aston-martin-history.component';

describe('AstonMartinHistoryComponent', () => {
  let component: AstonMartinHistoryComponent;
  let fixture: ComponentFixture<AstonMartinHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstonMartinHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstonMartinHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
