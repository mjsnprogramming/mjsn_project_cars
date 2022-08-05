import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbarthHistoryComponent } from './abarth-history.component';

describe('AbarthHistoryComponent', () => {
  let component: AbarthHistoryComponent;
  let fixture: ComponentFixture<AbarthHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbarthHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbarthHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
