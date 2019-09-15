import { Component, OnInit } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private WebserviceService: WebserviceService) { }
  products : any;
  ngOnInit() {
    this.WebserviceService.getProducts('').subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

}
