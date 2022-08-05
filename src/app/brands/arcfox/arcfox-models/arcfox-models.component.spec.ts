import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcfoxModelsComponent } from './arcfox-models.component';

describe('ArcfoxModelsComponent', () => {
  let component: ArcfoxModelsComponent;
  let fixture: ComponentFixture<ArcfoxModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcfoxModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcfoxModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
