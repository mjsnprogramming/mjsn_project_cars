import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonkervoortComponent } from './donkervoort.component';

describe('DonkervoortComponent', () => {
  let component: DonkervoortComponent;
  let fixture: ComponentFixture<DonkervoortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonkervoortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonkervoortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
