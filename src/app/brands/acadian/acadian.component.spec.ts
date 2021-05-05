import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadianComponent } from './acadian.component';

describe('AcadianComponent', () => {
  let component: AcadianComponent;
  let fixture: ComponentFixture<AcadianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
