import { Component, OnInit,Renderer,ElementRef } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/dynamic-script-loader.service';
import { WebserviceService } from '../../services/webservice.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
// import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product_id : number = 0;
  display: string = 'none';

  enquiryForm = new FormGroup({
    product_id: new FormControl('',Validators.required),
    first_name: new FormControl('',Validators.required),
    mobile: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),
  });
  private element: any;
  constructor(private renderer:Renderer,private el: ElementRef, private dynamicScriptLoader: DynamicScriptLoaderService,
              private WebserviceService : WebserviceService) { 
     this.element = el.nativeElement;
  }
  result: any = [];
  profile : any;
  ngOnInit() {
    this.WebserviceService.home().subscribe((data) => {
      this.profile = data;
      console.log(this.profile);
      this.loadScript();
    });
    
  }
	public loadScript() {
		    this.dynamicScriptLoader.load('main').then(data => {
		      // Script Loaded Successfully
		    }).catch(error => console.log(error));   
  }
  
  addtocart(pid) { 
    console.log('add to cart here');
    var oldItems = JSON.parse(localStorage.getItem('CART')) || [];
    oldItems.push(pid);
    localStorage.setItem('CART', JSON.stringify(oldItems));
    
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

}
