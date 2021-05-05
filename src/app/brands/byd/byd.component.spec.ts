import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BydComponent } from './byd.component';

describe('BydComponent', () => {
  let component: BydComponent;
  let fixture: ComponentFixture<BydComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BydComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BydComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
