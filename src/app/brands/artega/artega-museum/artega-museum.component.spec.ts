import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtegaMuseumComponent } from './artega-museum.component';

describe('ArtegaMuseumComponent', () => {
  let component: ArtegaMuseumComponent;
  let fixture: ComponentFixture<ArtegaMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtegaMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtegaMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
