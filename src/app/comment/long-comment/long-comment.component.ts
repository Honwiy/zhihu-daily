import { Component, OnInit } from '@angular/core';
import { CommentService } from "../comment.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import { Route, Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-long-comment',
  templateUrl: './long-comment.component.html',
  styleUrls: ['./long-comment.component.css']
})
export class LongCommentComponent implements OnInit {

  commentId: string;
  long_comments: any = {};
  constructor(private commentService: CommentService,
              private http:HttpClient,
              private route: ActivatedRoute,) {
      this.commentId = commentService.commentId;
  }

  ngOnInit() {
    var url = "http://localhost:5000/long-comments/"+this.commentId;
    this.http
    .get(url)
    .subscribe((data)=>this.long_comments=(data['comments']));
  }

}
