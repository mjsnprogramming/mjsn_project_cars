import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpykerComponent } from './spyker.component';

describe('SpykerComponent', () => {
  let component: SpykerComponent;
  let fixture: ComponentFixture<SpykerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpykerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpykerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
