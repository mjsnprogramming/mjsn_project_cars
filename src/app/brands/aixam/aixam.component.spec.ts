import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AixamComponent } from './aixam.component';

describe('AixamComponent', () => {
  let component: AixamComponent;
  let fixture: ComponentFixture<AixamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AixamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AixamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
