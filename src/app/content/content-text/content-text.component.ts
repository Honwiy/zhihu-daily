import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import { ContentService } from "../content.service";


@Component({
  selector: 'app-content-text',
  templateUrl: './content-text.component.html',
  styleUrls: ['./content-text.component.css']
})
export class ContentTextComponent implements OnInit {
  id: string;
  public content: any = {};
  
  constructor(private http:HttpClient,
              private route: ActivatedRoute,
              private contentService: ContentService) {
      route.params.subscribe(params=>{this.id = params['id'];});
      contentService.contentId = this.id;
   }
  

  ngOnInit() {
    // var url = "http://58.87.97.151:5000/content/"+this.id;
    var url = "http://localhost:5000/content/"+this.id;
    this.http
    .get(url)
    .subscribe((data)=>this.content = data);
    // console.log(this.article);
  }

}
