import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuickComponent } from './buick.component';

describe('BuickComponent', () => {
  let component: BuickComponent;
  let fixture: ComponentFixture<BuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
