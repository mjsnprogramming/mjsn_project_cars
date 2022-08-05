import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscariMuseumComponent } from './ascari-museum.component';

describe('AscariMuseumComponent', () => {
  let component: AscariMuseumComponent;
  let fixture: ComponentFixture<AscariMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AscariMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AscariMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
