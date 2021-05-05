import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenosComponent } from './zenos.component';

describe('ZenosComponent', () => {
  let component: ZenosComponent;
  let fixture: ComponentFixture<ZenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
