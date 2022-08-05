import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcfoxMuseumComponent } from './arcfox-museum.component';

describe('ArcfoxMuseumComponent', () => {
  let component: ArcfoxMuseumComponent;
  let fixture: ComponentFixture<ArcfoxMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcfoxMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcfoxMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
