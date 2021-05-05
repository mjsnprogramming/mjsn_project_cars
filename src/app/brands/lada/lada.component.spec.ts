import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadaComponent } from './lada.component';

describe('LadaComponent', () => {
  let component: LadaComponent;
  let fixture: ComponentFixture<LadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
