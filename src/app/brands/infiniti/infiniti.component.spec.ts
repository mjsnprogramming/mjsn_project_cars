import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinitiComponent } from './infiniti.component';

describe('InfinitiComponent', () => {
  let component: InfinitiComponent;
  let fixture: ComponentFixture<InfinitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfinitiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
