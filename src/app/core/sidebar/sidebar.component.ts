import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  itemTitles = ['用户推荐日报','日常心理学','电影日报','不许无聊','设计日报','大公司日报','财经日报','互联网安全','开始游戏','音乐日报','动漫日报','体育日报'];

  constructor() { }

  ngOnInit() {
  }

}
