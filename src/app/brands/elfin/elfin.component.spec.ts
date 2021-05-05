import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElfinComponent } from './elfin.component';

describe('ElfinComponent', () => {
  let component: ElfinComponent;
  let fixture: ComponentFixture<ElfinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElfinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElfinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
