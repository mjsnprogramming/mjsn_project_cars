import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarakiComponent } from './laraki.component';

describe('LarakiComponent', () => {
  let component: LarakiComponent;
  let fixture: ComponentFixture<LarakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarakiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LarakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
