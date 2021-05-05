import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LordstownComponent } from './lordstown.component';

describe('LordstownComponent', () => {
  let component: LordstownComponent;
  let fixture: ComponentFixture<LordstownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LordstownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LordstownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
