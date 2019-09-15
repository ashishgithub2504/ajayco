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
      });
    });
    
  }

}
