import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmcComponent } from './gmc.component';

describe('GmcComponent', () => {
  let component: GmcComponent;
  let fixture: ComponentFixture<GmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
