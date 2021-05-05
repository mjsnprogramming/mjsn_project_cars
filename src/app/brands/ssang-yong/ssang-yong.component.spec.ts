import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsangYongComponent } from './ssang-yong.component';

describe('SsangYongComponent', () => {
  let component: SsangYongComponent;
  let fixture: ComponentFixture<SsangYongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsangYongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsangYongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
