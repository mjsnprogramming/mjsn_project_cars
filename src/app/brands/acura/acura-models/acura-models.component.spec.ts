import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuraModelsComponent } from './acura-models.component';

describe('AcuraModelsComponent', () => {
  let component: AcuraModelsComponent;
  let fixture: ComponentFixture<AcuraModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcuraModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuraModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
