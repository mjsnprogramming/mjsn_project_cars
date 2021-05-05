import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxComponent } from './mtx.component';

describe('MtxComponent', () => {
  let component: MtxComponent;
  let fixture: ComponentFixture<MtxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
