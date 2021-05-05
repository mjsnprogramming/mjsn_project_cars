import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DearccComponent } from './dearcc.component';

describe('DearccComponent', () => {
  let component: DearccComponent;
  let fixture: ComponentFixture<DearccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DearccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DearccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
