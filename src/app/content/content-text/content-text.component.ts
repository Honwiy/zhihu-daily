import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-text',
  templateUrl: './content-text.component.html',
  styleUrls: ['./content-text.component.css']
})
export class ContentTextComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) {
      route.params.subscribe(params=>{this.id = params['id'];})
   }

  ngOnInit() {
    console.log(this.id);
  }

}
