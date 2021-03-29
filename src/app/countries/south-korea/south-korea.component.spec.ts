import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthKoreaComponent } from './south-korea.component';

describe('SouthKoreaComponent', () => {
  let component: SouthKoreaComponent;
  let fixture: ComponentFixture<SouthKoreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthKoreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthKoreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
