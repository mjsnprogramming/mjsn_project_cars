import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonarchComponent } from './monarch.component';

describe('MonarchComponent', () => {
  let component: MonarchComponent;
  let fixture: ComponentFixture<MonarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonarchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
