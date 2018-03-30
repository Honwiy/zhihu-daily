import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCommentComponent } from './short-comment.component';

describe('ShortCommentComponent', () => {
  let component: ShortCommentComponent;
  let fixture: ComponentFixture<ShortCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
