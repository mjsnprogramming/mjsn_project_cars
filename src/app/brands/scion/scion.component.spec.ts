import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScionComponent } from './scion.component';

describe('ScionComponent', () => {
  let component: ScionComponent;
  let fixture: ComponentFixture<ScionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
