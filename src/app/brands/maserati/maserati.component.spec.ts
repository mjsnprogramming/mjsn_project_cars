import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaseratiComponent } from './maserati.component';

describe('MaseratiComponent', () => {
  let component: MaseratiComponent;
  let fixture: ComponentFixture<MaseratiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaseratiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaseratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
