import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongCommentComponent } from './long-comment.component';

describe('LongCommentComponent', () => {
  let component: LongCommentComponent;
  let fixture: ComponentFixture<LongCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
