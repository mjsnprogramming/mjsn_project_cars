import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomaniaComponent } from './romania.component';

describe('RomaniaComponent', () => {
  let component: RomaniaComponent;
  let fixture: ComponentFixture<RomaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
