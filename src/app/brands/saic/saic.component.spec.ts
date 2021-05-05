import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaicComponent } from './saic.component';

describe('SaicComponent', () => {
  let component: SaicComponent;
  let fixture: ComponentFixture<SaicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
