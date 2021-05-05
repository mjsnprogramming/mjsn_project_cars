import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupraComponent } from './cupra.component';

describe('CupraComponent', () => {
  let component: CupraComponent;
  let fixture: ComponentFixture<CupraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CupraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
