import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../../services/webservice.service';
import {ActivatedRoute} from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private WebserviceService : WebserviceService ,
    private sanitized: DomSanitizer, 
    private activeRoute: ActivatedRoute) {
  }
  transform(value) {
    console.log(this.sanitized.bypassSecurityTrustHtml(value))
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
  
  result : any;
  value:any;
  ngOnInit() { 
    this.activeRoute.params.subscribe(routeParams => {
      this.WebserviceService.staticPage(routeParams.id).subscribe((data) => {
        this.result = data;
        console.log(this.result.description);
        this.result.description = this.assembleHTMLItem()
        //this.onActivate(this);      
      });
    });
  }

  assembleHTMLItem() {
    return this.sanitized.bypassSecurityTrustHtml(this.result.description);
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
