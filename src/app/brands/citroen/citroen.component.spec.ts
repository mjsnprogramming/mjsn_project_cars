import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitroenComponent } from './citroen.component';

describe('CitroenComponent', () => {
  let component: CitroenComponent;
  let fixture: ComponentFixture<CitroenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitroenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitroenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
