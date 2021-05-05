import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeltmeisterComponent } from './weltmeister.component';

describe('WeltmeisterComponent', () => {
  let component: WeltmeisterComponent;
  let fixture: ComponentFixture<WeltmeisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeltmeisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeltmeisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
