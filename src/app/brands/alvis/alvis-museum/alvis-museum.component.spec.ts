import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlvisMuseumComponent } from './alvis-museum.component';

describe('AlvisMuseumComponent', () => {
  let component: AlvisMuseumComponent;
  let fixture: ComponentFixture<AlvisMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlvisMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlvisMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
