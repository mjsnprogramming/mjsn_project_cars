import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigierComponent } from './ligier.component';

describe('LigierComponent', () => {
  let component: LigierComponent;
  let fixture: ComponentFixture<LigierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
