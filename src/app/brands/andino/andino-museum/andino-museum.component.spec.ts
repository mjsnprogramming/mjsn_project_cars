import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndinoMuseumComponent } from './andino-museum.component';

describe('AndinoMuseumComponent', () => {
  let component: AndinoMuseumComponent;
  let fixture: ComponentFixture<AndinoMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndinoMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndinoMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
