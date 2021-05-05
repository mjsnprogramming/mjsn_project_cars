import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaehanComponent } from './saehan.component';

describe('SaehanComponent', () => {
  let component: SaehanComponent;
  let fixture: ComponentFixture<SaehanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaehanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaehanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
