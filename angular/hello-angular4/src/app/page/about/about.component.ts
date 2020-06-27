import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../../services/webservice.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private WebserviceService : WebserviceService , 
    private activeRoute: ActivatedRoute) {
    }
  
  result : any;
  value:any;
  ngOnInit() { 
    this.activeRoute.params.subscribe(routeParams => {
      this.WebserviceService.staticPage(routeParams.id).subscribe((data) => {
        this.result = data;
        console.log(this.result); 
        this.onActivate(this);      
      });
    });
  }

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
  }

}
