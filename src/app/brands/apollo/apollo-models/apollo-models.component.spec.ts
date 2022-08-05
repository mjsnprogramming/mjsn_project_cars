import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApolloModelsComponent } from './apollo-models.component';

describe('ApolloModelsComponent', () => {
  let component: ApolloModelsComponent;
  let fixture: ComponentFixture<ApolloModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApolloModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApolloModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
