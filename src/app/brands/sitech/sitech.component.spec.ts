import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitechComponent } from './sitech.component';

describe('SitechComponent', () => {
  let component: SitechComponent;
  let fixture: ComponentFixture<SitechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
