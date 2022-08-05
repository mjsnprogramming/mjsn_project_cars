import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrineraModelsComponent } from './arrinera-models.component';

describe('ArrineraModelsComponent', () => {
  let component: ArrineraModelsComponent;
  let fixture: ComponentFixture<ArrineraModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrineraModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrineraModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
