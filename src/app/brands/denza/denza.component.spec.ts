import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenzaComponent } from './denza.component';

describe('DenzaComponent', () => {
  let component: DenzaComponent;
  let fixture: ComponentFixture<DenzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
