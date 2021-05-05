import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsparkComponent } from './aspark.component';

describe('AsparkComponent', () => {
  let component: AsparkComponent;
  let fixture: ComponentFixture<AsparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsparkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
