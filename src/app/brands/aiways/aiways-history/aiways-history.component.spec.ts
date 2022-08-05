import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiwaysHistoryComponent } from './aiways-history.component';

describe('AiwaysHistoryComponent', () => {
  let component: AiwaysHistoryComponent;
  let fixture: ComponentFixture<AiwaysHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiwaysHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiwaysHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
