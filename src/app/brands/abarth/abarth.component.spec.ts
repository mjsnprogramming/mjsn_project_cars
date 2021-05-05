import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbarthComponent } from './abarth.component';

describe('AbarthComponent', () => {
  let component: AbarthComponent;
  let fixture: ComponentFixture<AbarthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbarthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbarthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
