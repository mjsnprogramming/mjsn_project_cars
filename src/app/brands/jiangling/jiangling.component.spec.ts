import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JianglingComponent } from './jiangling.component';

describe('JianglingComponent', () => {
  let component: JianglingComponent;
  let fixture: ComponentFixture<JianglingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JianglingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JianglingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
