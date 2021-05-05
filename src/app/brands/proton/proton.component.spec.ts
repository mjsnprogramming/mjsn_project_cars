import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtonComponent } from './proton.component';

describe('ProtonComponent', () => {
  let component: ProtonComponent;
  let fixture: ComponentFixture<ProtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
