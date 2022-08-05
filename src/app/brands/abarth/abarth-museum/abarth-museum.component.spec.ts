import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbarthMuseumComponent } from './abarth-museum.component';

describe('AbarthMuseumComponent', () => {
  let component: AbarthMuseumComponent;
  let fixture: ComponentFixture<AbarthMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbarthMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbarthMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
