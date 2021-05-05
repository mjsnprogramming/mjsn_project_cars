import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimacComponent } from './rimac.component';

describe('RimacComponent', () => {
  let component: RimacComponent;
  let fixture: ComponentFixture<RimacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RimacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RimacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
