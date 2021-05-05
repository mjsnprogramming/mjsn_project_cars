import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavalComponent } from './haval.component';

describe('HavalComponent', () => {
  let component: HavalComponent;
  let fixture: ComponentFixture<HavalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HavalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HavalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
