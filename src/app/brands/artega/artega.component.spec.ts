import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtegaComponent } from './artega.component';

describe('ArtegaComponent', () => {
  let component: ArtegaComponent;
  let fixture: ComponentFixture<ArtegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
