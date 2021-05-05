import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonteverdiComponent } from './monteverdi.component';

describe('MonteverdiComponent', () => {
  let component: MonteverdiComponent;
  let fixture: ComponentFixture<MonteverdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonteverdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonteverdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
