import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadillacComponent } from './cadillac.component';

describe('CadillacComponent', () => {
  let component: CadillacComponent;
  let fixture: ComponentFixture<CadillacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadillacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadillacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
