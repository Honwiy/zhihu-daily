import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import { ContentText } from "./content-text.module";
import 'rxjs/Rx';


@Component({
  selector: 'app-content-text',
  templateUrl: './content-text.component.html',
  styleUrls: ['./content-text.component.css']
})
export class ContentTextComponent implements OnInit {
  id: string;
  public content: any;
  
  constructor(private http:HttpClient,
              private route: ActivatedRoute) {
      route.params.subscribe(params=>{this.id = params['id'];})
   }
  

  ngOnInit() {
    var url = "http://localhost:5000/content/"+this.id;
    this.http
    .get(url)
    .subscribe((data)=>this.content=data);
    // console.log(this.article);
  }

}
