import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetaComponent } from './neta.component';

describe('NetaComponent', () => {
  let component: NetaComponent;
  let fixture: ComponentFixture<NetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
