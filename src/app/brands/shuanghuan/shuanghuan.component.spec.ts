import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuanghuanComponent } from './shuanghuan.component';

describe('ShuanghuanComponent', () => {
  let component: ShuanghuanComponent;
  let fixture: ComponentFixture<ShuanghuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuanghuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuanghuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
