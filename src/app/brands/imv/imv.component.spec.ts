import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImvComponent } from './imv.component';

describe('ImvComponent', () => {
  let component: ImvComponent;
  let fixture: ComponentFixture<ImvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
