import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuraMuseumComponent } from './acura-museum.component';

describe('AcuraMuseumComponent', () => {
  let component: AcuraMuseumComponent;
  let fixture: ComponentFixture<AcuraMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcuraMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuraMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
