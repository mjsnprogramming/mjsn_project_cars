import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaradayFutureComponent } from './faraday-future.component';

describe('FaradayFutureComponent', () => {
  let component: FaradayFutureComponent;
  let fixture: ComponentFixture<FaradayFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaradayFutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaradayFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
