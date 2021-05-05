import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaganiComponent } from './pagani.component';

describe('PaganiComponent', () => {
  let component: PaganiComponent;
  let fixture: ComponentFixture<PaganiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaganiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaganiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
