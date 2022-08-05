import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApolloHistoryComponent } from './apollo-history.component';

describe('ApolloHistoryComponent', () => {
  let component: ApolloHistoryComponent;
  let fixture: ComponentFixture<ApolloHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApolloHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApolloHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
