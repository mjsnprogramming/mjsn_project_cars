import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorgwardComponent } from './borgward.component';

describe('BorgwardComponent', () => {
  let component: BorgwardComponent;
  let fixture: ComponentFixture<BorgwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorgwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorgwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
