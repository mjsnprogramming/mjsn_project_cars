import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrionComponent } from './trion.component';

describe('TrionComponent', () => {
  let component: TrionComponent;
  let fixture: ComponentFixture<TrionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
