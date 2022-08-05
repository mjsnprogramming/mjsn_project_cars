import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstonMartinMuseumComponent } from './aston-martin-museum.component';

describe('AstonMartinMuseumComponent', () => {
  let component: AstonMartinMuseumComponent;
  let fixture: ComponentFixture<AstonMartinMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstonMartinMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstonMartinMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
