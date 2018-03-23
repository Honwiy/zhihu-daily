import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Route, Router, ActivatedRoute, Params } from "@angular/router";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public stories:any;

  courses$: Observable<any>;
  constructor(private http:HttpClient, private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
    this.http
    // .get("http://58.87.97.151:5000/latest")
    .get("http://localhost:5000/latest")
    .subscribe((data)=>this.stories=data['stories']);
  }

  showContent(id) {
    this.router.navigate(['content', id]);
  }

}
