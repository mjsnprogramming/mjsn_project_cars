import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArielComponent } from './ariel.component';

describe('ArielComponent', () => {
  let component: ArielComponent;
  let fixture: ComponentFixture<ArielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
