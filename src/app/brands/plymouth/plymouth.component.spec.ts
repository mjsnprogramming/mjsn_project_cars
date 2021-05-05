import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlymouthComponent } from './plymouth.component';

describe('PlymouthComponent', () => {
  let component: PlymouthComponent;
  let fixture: ComponentFixture<PlymouthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlymouthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlymouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
