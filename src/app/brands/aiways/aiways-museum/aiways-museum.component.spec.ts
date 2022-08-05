import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiwaysMuseumComponent } from './aiways-museum.component';

describe('AiwaysMuseumComponent', () => {
  let component: AiwaysMuseumComponent;
  let fixture: ComponentFixture<AiwaysMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiwaysMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiwaysMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
