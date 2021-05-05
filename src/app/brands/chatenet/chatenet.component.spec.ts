import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatenetComponent } from './chatenet.component';

describe('ChatenetComponent', () => {
  let component: ChatenetComponent;
  let fixture: ComponentFixture<ChatenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
