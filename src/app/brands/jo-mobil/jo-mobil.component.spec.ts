import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoMobilComponent } from './jo-mobil.component';

describe('JoMobilComponent', () => {
  let component: JoMobilComponent;
  let fixture: ComponentFixture<JoMobilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoMobilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoMobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
