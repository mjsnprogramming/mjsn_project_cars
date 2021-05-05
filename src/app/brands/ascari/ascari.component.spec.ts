import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscariComponent } from './ascari.component';

describe('AscariComponent', () => {
  let component: AscariComponent;
  let fixture: ComponentFixture<AscariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AscariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AscariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
