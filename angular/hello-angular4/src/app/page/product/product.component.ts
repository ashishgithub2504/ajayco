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
  public name:any = 'Add to cart';
  public qty:number = 1;
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

  addtocart(pid) {
    pid.qty = this.qty; 
    this.name = 'Added';
    var items = JSON.parse(localStorage.getItem('CART')) || [];
    for (var i =0; i< items.length; i++) {
        var item = items[i];
        if (item.id == pid.id) {
            items.splice(i, 1);
            pid.qty = item.qty+this.qty;
        }
    }
    items.push(pid);
    items = JSON.stringify(items);    
    localStorage.setItem("CART", items);
    setTimeout(()=> {
      this.name = 'Add to cart';
    }, 1000);
  }

  public loadScript() {
    this.dynamicScriptLoader.load('main').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));   
}
}
