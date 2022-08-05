import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscariModelsComponent } from './ascari-models.component';

describe('AscariModelsComponent', () => {
  let component: AscariModelsComponent;
  let fixture: ComponentFixture<AscariModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AscariModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AscariModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
