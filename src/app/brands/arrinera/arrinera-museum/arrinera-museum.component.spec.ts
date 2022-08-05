import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrineraMuseumComponent } from './arrinera-museum.component';

describe('ArrineraMuseumComponent', () => {
  let component: ArrineraMuseumComponent;
  let fixture: ComponentFixture<ArrineraMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrineraMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrineraMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
