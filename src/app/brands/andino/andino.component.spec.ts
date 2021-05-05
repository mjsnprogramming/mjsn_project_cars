import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndinoComponent } from './andino.component';

describe('AndinoComponent', () => {
  let component: AndinoComponent;
  let fixture: ComponentFixture<AndinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
