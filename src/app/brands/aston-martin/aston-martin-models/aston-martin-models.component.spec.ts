import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstonMartinModelsComponent } from './aston-martin-models.component';

describe('AstonMartinModelsComponent', () => {
  let component: AstonMartinModelsComponent;
  let fixture: ComponentFixture<AstonMartinModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstonMartinModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstonMartinModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
