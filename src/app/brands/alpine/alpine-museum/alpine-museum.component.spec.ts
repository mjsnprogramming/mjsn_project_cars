import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpineMuseumComponent } from './alpine-museum.component';

describe('AlpineMuseumComponent', () => {
  let component: AlpineMuseumComponent;
  let fixture: ComponentFixture<AlpineMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlpineMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpineMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
