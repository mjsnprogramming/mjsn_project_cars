import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingulatoComponent } from './singulato.component';

describe('SingulatoComponent', () => {
  let component: SingulatoComponent;
  let fixture: ComponentFixture<SingulatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingulatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingulatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
