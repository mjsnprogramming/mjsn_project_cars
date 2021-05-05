import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauroSportAutoComponent } from './tauro-sport-auto.component';

describe('TauroSportAutoComponent', () => {
  let component: TauroSportAutoComponent;
  let fixture: ComponentFixture<TauroSportAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauroSportAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TauroSportAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
