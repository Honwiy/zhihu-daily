import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
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
  constructor(private http:HttpClient) {}


  ngOnInit() {
    this.http
    .get("http://localhost:5000/latest")
    .subscribe((data)=>this.stories=data['stories']);
  }

}
