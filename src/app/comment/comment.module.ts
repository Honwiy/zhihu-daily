import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LongCommentComponent } from './long-comment/long-comment.component';
import { ShortCommentComponent } from './short-comment/short-comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentRoutingModule } from "./comment-routing-module";
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CommentService } from './comment.service';

@NgModule({
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [LongCommentComponent, ShortCommentComponent, CommentListComponent],
  providers: [
    CommentService
  ]
})
export class CommentModule { }
