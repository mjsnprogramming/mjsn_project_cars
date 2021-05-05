import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RossionComponent } from './rossion.component';

describe('RossionComponent', () => {
  let component: RossionComponent;
  let fixture: ComponentFixture<RossionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RossionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RossionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
