import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtegaHistoryComponent } from './artega-history.component';

describe('ArtegaHistoryComponent', () => {
  let component: ArtegaHistoryComponent;
  let fixture: ComponentFixture<ArtegaHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtegaHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtegaHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
