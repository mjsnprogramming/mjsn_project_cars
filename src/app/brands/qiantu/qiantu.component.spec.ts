import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QiantuComponent } from './qiantu.component';

describe('QiantuComponent', () => {
  let component: QiantuComponent;
  let fixture: ComponentFixture<QiantuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QiantuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QiantuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
