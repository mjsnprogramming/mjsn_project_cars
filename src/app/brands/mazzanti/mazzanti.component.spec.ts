import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazzantiComponent } from './mazzanti.component';

describe('MazzantiComponent', () => {
  let component: MazzantiComponent;
  let fixture: ComponentFixture<MazzantiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MazzantiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MazzantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
