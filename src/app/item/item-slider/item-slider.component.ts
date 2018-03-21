import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import { Route, Router, ActivatedRoute, Params } from "@angular/router";
import 'rxjs/Rx';

@Component({
  selector: 'app-item-slider',
  templateUrl: './item-slider.component.html',
  styleUrls: ['./item-slider.component.css']
})
export class ItemSliderComponent implements OnInit {

  public top_stories:any;
  courses$: Observable<any>;
  constructor(private http:HttpClient,private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {

    this.http
    .get("http://localhost:5000/latest")
    .subscribe((data)=>this.top_stories=data['top_stories']);

    setTimeout(()=>{var mySwiper = new Swiper('.swiper-container',{
      zoom:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      spaceBetween: 30,
      centeredSlides: true,
      loop:true,
      autoplayDisableOnInteraction:false,
      longSwipesRatio: 0.3,
      touchRatio:1,
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true,//修改swiper的父元素时，自动初始化swiper
  })},2500);

  }

  showContent(id) {
    this.router.navigate(['content', id]);
  }

}
