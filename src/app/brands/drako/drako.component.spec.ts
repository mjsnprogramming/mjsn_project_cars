import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrakoComponent } from './drako.component';

describe('DrakoComponent', () => {
  let component: DrakoComponent;
  let fixture: ComponentFixture<DrakoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrakoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrakoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
