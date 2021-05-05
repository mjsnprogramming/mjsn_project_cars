import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetomasoComponent } from './detomaso.component';

describe('DetomasoComponent', () => {
  let component: DetomasoComponent;
  let fixture: ComponentFixture<DetomasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetomasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetomasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
