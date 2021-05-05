import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobianchiComponent } from './autobianchi.component';

describe('AutobianchiComponent', () => {
  let component: AutobianchiComponent;
  let fixture: ComponentFixture<AutobianchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutobianchiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutobianchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
