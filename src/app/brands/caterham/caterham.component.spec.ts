import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaterhamComponent } from './caterham.component';

describe('CaterhamComponent', () => {
  let component: CaterhamComponent;
  let fixture: ComponentFixture<CaterhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaterhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
