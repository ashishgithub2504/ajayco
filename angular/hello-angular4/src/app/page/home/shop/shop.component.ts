import { Component, OnInit } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  product_id : number = 0;
  display: string = 'none';
  enquiryForm = new FormGroup({
    product_id: new FormControl('',Validators.required),
    first_name: new FormControl('',Validators.required),
    mobile: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),
  });
  result: any = [];
  categories:any;
  constructor(private WebserviceService: WebserviceService,private activeRoute: ActivatedRoute) { }
  products : any;
  category_id: any;
  limit : any = 10;
  sort : any = 'name_asc';
  json: any;
  numbers : any;
  parameter : any;
  layout : string = 'grid';
  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.category_id = routeParams.id;
      this.callApi();
    });
    
    
    this.activeRoute.queryParams
      .subscribe(params => {
        this.parameter = params;
        this.callApi();
      });

    this.categories = JSON.parse(localStorage.getItem('CATEGORIES')) || [];
    if(this.categories.length < 1 ) {
      this.WebserviceService.getCategories().subscribe((data) => {
        this.categories = data;
        localStorage.setItem('CATEGORIES', JSON.stringify(this.categories));      
      });
    }
  }

  callApi() {
      this.products = '';
      this.WebserviceService.getProducts(this.category_id,this.parameter).subscribe((data) => {
        this.products = data;
        this.numbers = [];
        for (let i = 1; i <= this.products.data.pages; i++) {
            this.numbers.push(i);
        }
        console.log(this.numbers);  
      });
  }
  onSubmit() {
    console.log(this.enquiryForm.value.product_id);
    this.WebserviceService.enquiry(this.enquiryForm.value)
    .subscribe((data) => {
      this.result = data;
      console.log(this.result);
      if(this.result.status == true) {
        alert(this.result.message);
      } else {
        alert(this.result.message);
      }     
    });
  }

  openModel(pid) {
    this.enquiryForm.controls['product_id'].setValue(pid);
  }

  changelayout(id) {
    this.layout = id;
  }
  // filterByCat(cid) {
    
  //   this.WebserviceService.getProducts(cid).subscribe((data) => {
  //     this.products = data; 
  //   });
  // }

}
