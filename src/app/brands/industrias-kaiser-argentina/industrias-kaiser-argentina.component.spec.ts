import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriasKaiserArgentinaComponent } from './industrias-kaiser-argentina.component';

describe('IndustriasKaiserArgentinaComponent', () => {
  let component: IndustriasKaiserArgentinaComponent;
  let fixture: ComponentFixture<IndustriasKaiserArgentinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustriasKaiserArgentinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriasKaiserArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
