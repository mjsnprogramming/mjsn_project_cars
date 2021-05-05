import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VencerComponent } from './vencer.component';

describe('VencerComponent', () => {
  let component: VencerComponent;
  let fixture: ComponentFixture<VencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
