import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollsRoyceComponent } from './rolls-royce.component';

describe('RollsRoyceComponent', () => {
  let component: RollsRoyceComponent;
  let fixture: ComponentFixture<RollsRoyceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollsRoyceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollsRoyceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
