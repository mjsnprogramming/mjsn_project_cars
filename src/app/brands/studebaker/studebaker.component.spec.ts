import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudebakerComponent } from './studebaker.component';

describe('StudebakerComponent', () => {
  let component: StudebakerComponent;
  let fixture: ComponentFixture<StudebakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudebakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudebakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
