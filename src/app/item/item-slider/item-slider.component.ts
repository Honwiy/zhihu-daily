import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';

@Component({
  selector: 'app-item-slider',
  templateUrl: './item-slider.component.html',
  styleUrls: ['./item-slider.component.css']
})
export class ItemSliderComponent implements OnInit {

  public top_stories:any;

  courses$: Observable<any>;
  constructor(private http:HttpClient) {}


  ngOnInit() {

    this.http
    .get("http://localhost:5000/latest")
    .subscribe((data)=>this.top_stories=data['top_stories']);

    var mySwiper = new Swiper('.swiper-container',{
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
      // centeredSlides: true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      // slidesPerView: 1,
      // spaceBetween: 30,
      // loop: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
  });
  }

  showContent(id) {
    console.log(id)
  }

}
