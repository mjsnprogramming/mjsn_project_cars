import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndinoHistoryComponent } from './andino-history.component';

describe('AndinoHistoryComponent', () => {
  let component: AndinoHistoryComponent;
  let fixture: ComponentFixture<AndinoHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndinoHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndinoHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
