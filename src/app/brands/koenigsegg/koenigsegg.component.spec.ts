import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoenigseggComponent } from './koenigsegg.component';

describe('KoenigseggComponent', () => {
  let component: KoenigseggComponent;
  let fixture: ComponentFixture<KoenigseggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoenigseggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoenigseggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
