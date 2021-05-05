import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KandiComponent } from './kandi.component';

describe('KandiComponent', () => {
  let component: KandiComponent;
  let fixture: ComponentFixture<KandiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KandiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
