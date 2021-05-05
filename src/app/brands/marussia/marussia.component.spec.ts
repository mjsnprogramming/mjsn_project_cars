import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarussiaComponent } from './marussia.component';

describe('MarussiaComponent', () => {
  let component: MarussiaComponent;
  let fixture: ComponentFixture<MarussiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarussiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarussiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
