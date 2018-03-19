import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item-slider',
  templateUrl: './item-slider.component.html',
  styleUrls: ['./item-slider.component.css']
})
export class ItemSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
  });
  }

}
