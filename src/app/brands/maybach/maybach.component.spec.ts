import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaybachComponent } from './maybach.component';

describe('MaybachComponent', () => {
  let component: MaybachComponent;
  let fixture: ComponentFixture<MaybachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaybachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaybachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
