import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AionModelsComponent } from './aion-models.component';

describe('AionModelsComponent', () => {
  let component: AionModelsComponent;
  let fixture: ComponentFixture<AionModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AionModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AionModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
