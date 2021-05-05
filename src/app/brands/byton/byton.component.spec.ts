import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BytonComponent } from './byton.component';

describe('BytonComponent', () => {
  let component: BytonComponent;
  let fixture: ComponentFixture<BytonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BytonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BytonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
