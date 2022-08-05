import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadianMuseumComponent } from './acadian-museum.component';

describe('AcadianMuseumComponent', () => {
  let component: AcadianMuseumComponent;
  let fixture: ComponentFixture<AcadianMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadianMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadianMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
