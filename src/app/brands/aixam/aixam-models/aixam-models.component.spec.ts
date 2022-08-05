import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AixamModelsComponent } from './aixam-models.component';

describe('AixamModelsComponent', () => {
  let component: AixamModelsComponent;
  let fixture: ComponentFixture<AixamModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AixamModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AixamModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
