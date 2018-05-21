import { Component, OnInit } from '@angular/core';
import { CommentService } from "../comment.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import { Route, Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-short-comment',
  templateUrl: './short-comment.component.html',
  styleUrls: ['./short-comment.component.css']
})
export class ShortCommentComponent implements OnInit {

  commentId:string;
  short_comments:any = {};
  constructor(private commentService: CommentService,
              private http:HttpClient,
              private route: ActivatedRoute,) {
      this.commentId = commentService.commentId;
  }

  ngOnInit() {
    var url = "http://localhost:5000/short-comments/"+this.commentId;
    this.http
    .get(url)
    .subscribe((data)=>this.short_comments=(data['comments']));
  }

}
