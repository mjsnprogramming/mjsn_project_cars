import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiwaysComponent } from './aiways.component';

describe('AiwaysComponent', () => {
  let component: AiwaysComponent;
  let fixture: ComponentFixture<AiwaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiwaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
