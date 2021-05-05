import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsoComponent } from './fso.component';

describe('FsoComponent', () => {
  let component: FsoComponent;
  let fixture: ComponentFixture<FsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
