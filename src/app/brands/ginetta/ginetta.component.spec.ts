import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GinettaComponent } from './ginetta.component';

describe('GinettaComponent', () => {
  let component: GinettaComponent;
  let fixture: ComponentFixture<GinettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GinettaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GinettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
