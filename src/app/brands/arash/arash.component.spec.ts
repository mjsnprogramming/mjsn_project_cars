import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArashComponent } from './arash.component';

describe('ArashComponent', () => {
  let component: ArashComponent;
  let fixture: ComponentFixture<ArashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
