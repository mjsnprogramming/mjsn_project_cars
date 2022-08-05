import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AixamMuseumComponent } from './aixam-museum.component';

describe('AixamMuseumComponent', () => {
  let component: AixamMuseumComponent;
  let fixture: ComponentFixture<AixamMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AixamMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AixamMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
