import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicScriptLoaderService } from 'src/app/dynamic-script-loader.service';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public activeRoute: ActivatedRoute, 
    private dynamicScriptLoader: DynamicScriptLoaderService,
    public WebserviceService: WebserviceService) { }
  result : any;
  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.WebserviceService.productDetails(routeParams.id).subscribe((data) => {
        this.result = data;
        if(this.result.status == false) {
            alert(this.result.message);
        }
        this.loadScript();
        console.log(this.result);      
      });
    });
  }

  public loadScript() {
    this.dynamicScriptLoader.load('main').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));   
}
}
