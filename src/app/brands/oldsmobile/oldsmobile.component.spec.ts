import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldsmobileComponent } from './oldsmobile.component';

describe('OldsmobileComponent', () => {
  let component: OldsmobileComponent;
  let fixture: ComponentFixture<OldsmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldsmobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldsmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
