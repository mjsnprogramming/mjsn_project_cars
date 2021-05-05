import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiAutoComponent } from './li-auto.component';

describe('LiAutoComponent', () => {
  let component: LiAutoComponent;
  let fixture: ComponentFixture<LiAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
