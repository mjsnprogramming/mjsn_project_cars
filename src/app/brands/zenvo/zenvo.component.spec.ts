import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenvoComponent } from './zenvo.component';

describe('ZenvoComponent', () => {
  let component: ZenvoComponent;
  let fixture: ComponentFixture<ZenvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZenvoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
