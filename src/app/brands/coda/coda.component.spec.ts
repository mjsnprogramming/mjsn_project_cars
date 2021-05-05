import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodaComponent } from './coda.component';

describe('CodaComponent', () => {
  let component: CodaComponent;
  let fixture: ComponentFixture<CodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
