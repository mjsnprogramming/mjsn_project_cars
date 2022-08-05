import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArielModelsComponent } from './ariel-models.component';

describe('ArielModelsComponent', () => {
  let component: ArielModelsComponent;
  let fixture: ComponentFixture<ArielModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArielModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArielModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
