import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiwaysModelsComponent } from './aiways-models.component';

describe('AiwaysModelsComponent', () => {
  let component: AiwaysModelsComponent;
  let fixture: ComponentFixture<AiwaysModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiwaysModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiwaysModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
