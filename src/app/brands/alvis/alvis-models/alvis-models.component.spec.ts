import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlvisModelsComponent } from './alvis-models.component';

describe('AlvisModelsComponent', () => {
  let component: AlvisModelsComponent;
  let fixture: ComponentFixture<AlvisModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlvisModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlvisModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
