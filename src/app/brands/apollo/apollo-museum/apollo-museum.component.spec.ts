import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApolloMuseumComponent } from './apollo-museum.component';

describe('ApolloMuseumComponent', () => {
  let component: ApolloMuseumComponent;
  let fixture: ComponentFixture<ApolloMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApolloMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApolloMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
