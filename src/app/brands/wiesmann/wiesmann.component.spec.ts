import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiesmannComponent } from './wiesmann.component';

describe('WiesmannComponent', () => {
  let component: WiesmannComponent;
  let fixture: ComponentFixture<WiesmannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiesmannComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiesmannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
