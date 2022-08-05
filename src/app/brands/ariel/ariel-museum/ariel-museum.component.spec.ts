import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArielMuseumComponent } from './ariel-museum.component';

describe('ArielMuseumComponent', () => {
  let component: ArielMuseumComponent;
  let fixture: ComponentFixture<ArielMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArielMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArielMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
