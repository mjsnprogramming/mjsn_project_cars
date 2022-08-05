import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArashModelsComponent } from './arash-models.component';

describe('ArashModelsComponent', () => {
  let component: ArashModelsComponent;
  let fixture: ComponentFixture<ArashModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArashModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArashModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
