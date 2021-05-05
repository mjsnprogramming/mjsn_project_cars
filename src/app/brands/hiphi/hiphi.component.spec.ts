import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiphiComponent } from './hiphi.component';

describe('HiphiComponent', () => {
  let component: HiphiComponent;
  let fixture: ComponentFixture<HiphiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiphiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiphiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
