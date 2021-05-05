import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NioComponent } from './nio.component';

describe('NioComponent', () => {
  let component: NioComponent;
  let fixture: ComponentFixture<NioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
