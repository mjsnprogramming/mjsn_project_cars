import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HennesseyComponent } from './hennessey.component';

describe('HennesseyComponent', () => {
  let component: HennesseyComponent;
  let fixture: ComponentFixture<HennesseyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HennesseyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HennesseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
