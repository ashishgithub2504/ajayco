import { Component, OnInit } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private WebserviceService: WebserviceService,private activeRoute: ActivatedRoute) { }
  news : any;
  objectLength: any;
  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.news = '';
      this.objectLength = Object.keys(routeParams).length != 0;
      if(this.objectLength === true) {
        this.WebserviceService.newsdetail(routeParams['id']).subscribe((data) => {
          this.news = data;
        });
      } else {
        this.WebserviceService.news().subscribe((data) => {
          this.news = data;
        });
      }
      console.log(this.news);
    });
  }

}
