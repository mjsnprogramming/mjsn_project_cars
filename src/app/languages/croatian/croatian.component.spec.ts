import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CroatianComponent } from './croatian.component';

describe('CroatianComponent', () => {
  let component: CroatianComponent;
  let fixture: ComponentFixture<CroatianComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CroatianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroatianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
