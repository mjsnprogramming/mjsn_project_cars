import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelkusComponent } from './melkus.component';

describe('MelkusComponent', () => {
  let component: MelkusComponent;
  let fixture: ComponentFixture<MelkusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelkusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MelkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
