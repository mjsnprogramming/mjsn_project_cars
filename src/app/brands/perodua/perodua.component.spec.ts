import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeroduaComponent } from './perodua.component';

describe('PeroduaComponent', () => {
  let component: PeroduaComponent;
  let fixture: ComponentFixture<PeroduaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeroduaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeroduaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
