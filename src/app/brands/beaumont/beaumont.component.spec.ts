import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaumontComponent } from './beaumont.component';

describe('BeaumontComponent', () => {
  let component: BeaumontComponent;
  let fixture: ComponentFixture<BeaumontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeaumontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaumontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
