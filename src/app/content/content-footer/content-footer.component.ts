import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import { ContentService } from "../content.service";

@Component({
  selector: 'app-content-footer',
  templateUrl: './content-footer.component.html',
  styleUrls: ['./content-footer.component.css']
})
export class ContentFooterComponent implements OnInit {

  contentId: string;
  public story_extra: any = {};
  public content: any = {};

  constructor(private http:HttpClient,
              private contentService: ContentService
            ) {
      this.contentId = contentService.contentId;
   }

  ngOnInit() {
    var url = "http://localhost:5000/content/"+this.contentId;
    var extraUrl = "http://localhost:5000/story-extra/"+this.contentId;
    this.http
    .get(extraUrl)
    .subscribe((data)=>this.story_extra = data);

    this.http
    .get(url)
    .subscribe((data)=>this.content = data);

    // console.log(this.contentId);
    
  }

}
