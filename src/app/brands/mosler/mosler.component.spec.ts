import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoslerComponent } from './mosler.component';

describe('MoslerComponent', () => {
  let component: MoslerComponent;
  let fixture: ComponentFixture<MoslerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoslerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoslerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
