import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpineModelsComponent } from './alpine-models.component';

describe('AlpineModelsComponent', () => {
  let component: AlpineModelsComponent;
  let fixture: ComponentFixture<AlpineModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlpineModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpineModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
