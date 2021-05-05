import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinogoldComponent } from './sinogold.component';

describe('SinogoldComponent', () => {
  let component: SinogoldComponent;
  let fixture: ComponentFixture<SinogoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinogoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinogoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
