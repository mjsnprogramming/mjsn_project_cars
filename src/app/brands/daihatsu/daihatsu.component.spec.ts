import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaihatsuComponent } from './daihatsu.component';

describe('DaihatsuComponent', () => {
  let component: DaihatsuComponent;
  let fixture: ComponentFixture<DaihatsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaihatsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaihatsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
