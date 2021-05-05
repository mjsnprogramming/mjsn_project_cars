import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexusComponent } from './lexus.component';

describe('LexusComponent', () => {
  let component: LexusComponent;
  let fixture: ComponentFixture<LexusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LexusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LexusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
