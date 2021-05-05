import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelbyComponent } from './shelby.component';

describe('ShelbyComponent', () => {
  let component: ShelbyComponent;
  let fixture: ComponentFixture<ShelbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
