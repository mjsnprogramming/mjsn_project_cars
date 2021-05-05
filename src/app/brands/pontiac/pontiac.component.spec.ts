import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontiacComponent } from './pontiac.component';

describe('PontiacComponent', () => {
  let component: PontiacComponent;
  let fixture: ComponentFixture<PontiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PontiacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PontiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
