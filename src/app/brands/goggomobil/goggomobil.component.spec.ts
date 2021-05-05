import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoggomobilComponent } from './goggomobil.component';

describe('GoggomobilComponent', () => {
  let component: GoggomobilComponent;
  let fixture: ComponentFixture<GoggomobilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoggomobilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoggomobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
