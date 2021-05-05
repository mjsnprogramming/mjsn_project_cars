import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsunaComponent } from './asuna.component';

describe('AsunaComponent', () => {
  let component: AsunaComponent;
  let fixture: ComponentFixture<AsunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
