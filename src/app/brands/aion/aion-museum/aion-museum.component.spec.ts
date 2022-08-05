import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AionMuseumComponent } from './aion-museum.component';

describe('AionMuseumComponent', () => {
  let component: AionMuseumComponent;
  let fixture: ComponentFixture<AionMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AionMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AionMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
