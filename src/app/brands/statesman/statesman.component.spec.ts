import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesmanComponent } from './statesman.component';

describe('StatesmanComponent', () => {
  let component: StatesmanComponent;
  let fixture: ComponentFixture<StatesmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
