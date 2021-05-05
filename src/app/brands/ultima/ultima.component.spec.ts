import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimaComponent } from './ultima.component';

describe('UltimaComponent', () => {
  let component: UltimaComponent;
  let fixture: ComponentFixture<UltimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
