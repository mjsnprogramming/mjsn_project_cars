import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlovakiaComponent } from './slovakia.component';

describe('SlovakiaComponent', () => {
  let component: SlovakiaComponent;
  let fixture: ComponentFixture<SlovakiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlovakiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlovakiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
