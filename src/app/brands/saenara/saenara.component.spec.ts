import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaenaraComponent } from './saenara.component';

describe('SaenaraComponent', () => {
  let component: SaenaraComponent;
  let fixture: ComponentFixture<SaenaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaenaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaenaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
