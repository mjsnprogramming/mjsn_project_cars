import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzeraComponent } from './izera.component';

describe('IzeraComponent', () => {
  let component: IzeraComponent;
  let fixture: ComponentFixture<IzeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
