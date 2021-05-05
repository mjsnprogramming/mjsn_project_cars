import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvrComponent } from './tvr.component';

describe('TvrComponent', () => {
  let component: TvrComponent;
  let fixture: ComponentFixture<TvrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
