import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanhardComponent } from './panhard.component';

describe('PanhardComponent', () => {
  let component: PanhardComponent;
  let fixture: ComponentFixture<PanhardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanhardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanhardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
