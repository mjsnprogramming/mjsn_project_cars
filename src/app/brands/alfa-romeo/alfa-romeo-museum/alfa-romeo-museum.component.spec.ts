import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfaRomeoMuseumComponent } from './alfa-romeo-museum.component';

describe('AlfaRomeoMuseumComponent', () => {
  let component: AlfaRomeoMuseumComponent;
  let fixture: ComponentFixture<AlfaRomeoMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfaRomeoMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlfaRomeoMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
