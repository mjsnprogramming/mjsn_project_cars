import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlfComponent } from './vlf.component';

describe('VlfComponent', () => {
  let component: VlfComponent;
  let fixture: ComponentFixture<VlfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VlfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
