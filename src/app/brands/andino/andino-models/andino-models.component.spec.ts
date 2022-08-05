import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndinoModelsComponent } from './andino-models.component';

describe('AndinoModelsComponent', () => {
  let component: AndinoModelsComponent;
  let fixture: ComponentFixture<AndinoModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndinoModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndinoModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
