import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArashMuseumComponent } from './arash-museum.component';

describe('ArashMuseumComponent', () => {
  let component: ArashMuseumComponent;
  let fixture: ComponentFixture<ArashMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArashMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArashMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
