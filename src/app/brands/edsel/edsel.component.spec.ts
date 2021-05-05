import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdselComponent } from './edsel.component';

describe('EdselComponent', () => {
  let component: EdselComponent;
  let fixture: ComponentFixture<EdselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
