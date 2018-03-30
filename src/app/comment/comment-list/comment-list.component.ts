import { CommentService } from '../comment.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import { Route, Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  id: string;
  
  constructor(private http:HttpClient,
              private route: ActivatedRoute,
              private commentService: CommentService) {
      route.params.subscribe(params=>{this.id = params['id'];});
      commentService.commentId = this.id;
   }

  ngOnInit() {
  }

}
