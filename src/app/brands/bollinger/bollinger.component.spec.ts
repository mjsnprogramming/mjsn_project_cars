import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BollingerComponent } from './bollinger.component';

describe('BollingerComponent', () => {
  let component: BollingerComponent;
  let fixture: ComponentFixture<BollingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BollingerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BollingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
