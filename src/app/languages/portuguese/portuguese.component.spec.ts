import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortugueseComponent } from './portuguese.component';

describe('PortugueseComponent', () => {
  let component: PortugueseComponent;
  let fixture: ComponentFixture<PortugueseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortugueseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortugueseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
