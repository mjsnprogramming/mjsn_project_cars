import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfaRomeoModelsComponent } from './alfa-romeo-models.component';

describe('AlfaRomeoModelsComponent', () => {
  let component: AlfaRomeoModelsComponent;
  let fixture: ComponentFixture<AlfaRomeoModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfaRomeoModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlfaRomeoModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
