import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcfoxComponent } from './arcfox.component';

describe('ArcfoxComponent', () => {
  let component: ArcfoxComponent;
  let fixture: ComponentFixture<ArcfoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcfoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcfoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
