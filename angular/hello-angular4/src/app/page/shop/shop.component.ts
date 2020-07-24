import { Component, OnInit } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  product_id : number = 0;
  cartItems : number;
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
  constructor(private meta: Meta,private WebserviceService: WebserviceService,private activeRoute: ActivatedRoute) { }
  products : any;
  category_id: any;
  limit : any = 10;
  sort : any = 'name_asc';
  json: any;
  numbers : any;
  parameter : any;
  layout : string = 'grid';
  public name:any = 'Add to cart';
  public qty:number = 1;
  ngOnInit() {
    this.meta.removeTag('name="description"'); 
    this.meta.removeTag('name="keywords"'); 
    this.meta.addTags([
      {name: 'description', content: 'Jenix.in: Online Shopping India - Buy GPS Navigation System, CCTV Surveillance,WiFI Camera,HD Camera, IP cameras, DVR,NVR,PABX System, Sensor Module,Relay Module,Components,Controller Module,Power Supply,wire,Security System, Alarm Panel & Sensor, Electronic Lock,DIY KIT - Make your Self,Home Automation.'},
      {name: 'keywords', content: 'Jenix.in: Online Shopping India - Buy GPS Navigation System, CCTV Surveillance,WiFI Camera,HD Camera, IP cameras, DVR,NVR,PABX System, Sensor Module,Relay Module,Components,Controller Module,Power Supply,wire,Security System, Alarm Panel & Sensor, Electronic Lock,DIY KIT - Make your Self,Home Automation.'}
    ]);
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
    this.cartItems = items.length;
    items = JSON.stringify(items);    
    localStorage.setItem("CART", items);
    setTimeout(()=> {
      this.WebserviceService.updateCartItems(this.cartItems);
      this.name = 'Add to cart';
    }, 500);
  }
  
  openModel(pid) {
    this.enquiryForm.controls['product_id'].setValue(pid);
  }

  changelayout(id) {
    this.layout = id;
  }

  filterByCat() {
    var x = document.getElementById("slideToggleCat");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  // filterByCat(cid) {
    
  //   this.WebserviceService.getProducts(cid).subscribe((data) => {
  //     this.products = data; 
  //   });
  // }

}
