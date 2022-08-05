import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsparkModelsComponent } from './aspark-models.component';

describe('AsparkModelsComponent', () => {
  let component: AsparkModelsComponent;
  let fixture: ComponentFixture<AsparkModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsparkModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsparkModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
