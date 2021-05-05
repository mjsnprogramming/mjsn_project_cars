import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrillianceComponent } from './brilliance.component';

describe('BrillianceComponent', () => {
  let component: BrillianceComponent;
  let fixture: ComponentFixture<BrillianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrillianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrillianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
