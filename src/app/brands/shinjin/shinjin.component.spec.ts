import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinjinComponent } from './shinjin.component';

describe('ShinjinComponent', () => {
  let component: ShinjinComponent;
  let fixture: ComponentFixture<ShinjinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShinjinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShinjinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
