import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamblerComponent } from './rambler.component';

describe('RamblerComponent', () => {
  let component: RamblerComponent;
  let fixture: ComponentFixture<RamblerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamblerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
