import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroatianComponent } from './croatian.component';

describe('CroatianComponent', () => {
  let component: CroatianComponent;
  let fixture: ComponentFixture<CroatianComponent>;

  beforeEach(async(() => {
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
