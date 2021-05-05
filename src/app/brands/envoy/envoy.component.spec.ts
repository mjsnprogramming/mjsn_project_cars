import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyComponent } from './envoy.component';

describe('EnvoyComponent', () => {
  let component: EnvoyComponent;
  let fixture: ComponentFixture<EnvoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
