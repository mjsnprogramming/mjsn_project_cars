import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitsuokaComponent } from './mitsuoka.component';

describe('MitsuokaComponent', () => {
  let component: MitsuokaComponent;
  let fixture: ComponentFixture<MitsuokaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitsuokaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MitsuokaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
