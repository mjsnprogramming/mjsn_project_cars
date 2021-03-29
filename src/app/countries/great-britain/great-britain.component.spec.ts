import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatBritainComponent } from './great-britain.component';

describe('GreatBritainComponent', () => {
  let component: GreatBritainComponent;
  let fixture: ComponentFixture<GreatBritainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatBritainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatBritainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
