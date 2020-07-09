import { Component, OnInit,Renderer,ElementRef } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/dynamic-script-loader.service';
import { WebserviceService } from '../../services/webservice.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { $ } from 'protractor';
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
  formdata : any;
  public name:any = 'Add to cart';
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
    pid.qty = 1; 
    this.name = 'Added';
    var items = JSON.parse(localStorage.getItem('CART')) || [];
    for (var i =0; i< items.length; i++) {
        var item = items[i];
        if (item.id == pid.id) {
            items.splice(i, 1);
            pid.qty = item.qty+1;
        }
    }
    items.push(pid);
    items = JSON.stringify(items);    
    localStorage.setItem("CART", items);
    setTimeout(()=> {
      this.name = 'Add to cart';
    }, 1500);
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
    console.log(this.enquiryForm.value);
    this.formdata = 'www.jenix.in/'+pid;
    // $('.enquiry-social a').attr('href',url);
    this.enquiryForm.controls['product_id'].setValue(this.formdata);
  }

  socialshare(surl) {
    window.location.href = surl+this.formdata+'&'+this.enquiryForm.value.message;
  }

  socialtelegram(surl) {
    window.location.href = surl+'?url='+this.formdata+'&text='+this.enquiryForm.value.message;
  }

  socialsms(surl){
    window.location.href = surl+this.formdata+this.enquiryForm.value.message;
  }

}
