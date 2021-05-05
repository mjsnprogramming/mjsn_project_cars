import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlvisComponent } from './alvis.component';

describe('AlvisComponent', () => {
  let component: AlvisComponent;
  let fixture: ComponentFixture<AlvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
