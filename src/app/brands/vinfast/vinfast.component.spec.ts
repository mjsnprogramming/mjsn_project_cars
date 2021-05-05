import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinfastComponent } from './vinfast.component';

describe('VinfastComponent', () => {
  let component: VinfastComponent;
  let fixture: ComponentFixture<VinfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinfastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
