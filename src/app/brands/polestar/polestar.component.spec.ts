import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolestarComponent } from './polestar.component';

describe('PolestarComponent', () => {
  let component: PolestarComponent;
  let fixture: ComponentFixture<PolestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolestarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
