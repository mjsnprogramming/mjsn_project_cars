import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtegaModelsComponent } from './artega-models.component';

describe('ArtegaModelsComponent', () => {
  let component: ArtegaModelsComponent;
  let fixture: ComponentFixture<ArtegaModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtegaModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtegaModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
