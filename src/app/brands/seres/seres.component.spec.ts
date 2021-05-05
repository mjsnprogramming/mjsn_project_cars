import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeresComponent } from './seres.component';

describe('SeresComponent', () => {
  let component: SeresComponent;
  let fixture: ComponentFixture<SeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
