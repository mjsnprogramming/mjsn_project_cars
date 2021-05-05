import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnzmannComponent } from './enzmann.component';

describe('EnzmannComponent', () => {
  let component: EnzmannComponent;
  let fixture: ComponentFixture<EnzmannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnzmannComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnzmannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
