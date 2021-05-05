import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrabhamComponent } from './brabham.component';

describe('BrabhamComponent', () => {
  let component: BrabhamComponent;
  let fixture: ComponentFixture<BrabhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrabhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrabhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
