import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsparkMuseumComponent } from './aspark-museum.component';

describe('AsparkMuseumComponent', () => {
  let component: AsparkMuseumComponent;
  let fixture: ComponentFixture<AsparkMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsparkMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsparkMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
