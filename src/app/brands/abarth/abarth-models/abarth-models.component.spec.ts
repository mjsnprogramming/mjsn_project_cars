import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbarthModelsComponent } from './abarth-models.component';

describe('AbarthModelsComponent', () => {
  let component: AbarthModelsComponent;
  let fixture: ComponentFixture<AbarthModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbarthModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbarthModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
