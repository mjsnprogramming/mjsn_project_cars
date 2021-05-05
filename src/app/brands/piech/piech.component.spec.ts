import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechComponent } from './piech.component';

describe('PiechComponent', () => {
  let component: PiechComponent;
  let fixture: ComponentFixture<PiechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
