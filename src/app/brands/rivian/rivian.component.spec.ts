import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RivianComponent } from './rivian.component';

describe('RivianComponent', () => {
  let component: RivianComponent;
  let fixture: ComponentFixture<RivianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RivianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RivianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
