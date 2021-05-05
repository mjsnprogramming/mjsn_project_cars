import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsuzuComponent } from './isuzu.component';

describe('IsuzuComponent', () => {
  let component: IsuzuComponent;
  let fixture: ComponentFixture<IsuzuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsuzuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsuzuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
