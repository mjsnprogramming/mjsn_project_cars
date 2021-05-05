import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsderaComponent } from './isdera.component';

describe('IsderaComponent', () => {
  let component: IsderaComponent;
  let fixture: ComponentFixture<IsderaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsderaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
