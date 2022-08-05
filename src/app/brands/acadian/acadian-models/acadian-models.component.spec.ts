import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadianModelsComponent } from './acadian-models.component';

describe('AcadianModelsComponent', () => {
  let component: AcadianModelsComponent;
  let fixture: ComponentFixture<AcadianModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadianModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadianModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
