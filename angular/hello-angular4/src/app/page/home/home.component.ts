import { Component, OnInit,Renderer,ElementRef } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/dynamic-script-loader.service';
import { WebserviceService } from '../../services/webservice.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { $ } from 'protractor';
// import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  private element: any;
  constructor(private renderer:Renderer,private el: ElementRef, private meta: Meta, private dynamicScriptLoader: DynamicScriptLoaderService,
              private WebserviceService : WebserviceService) { 
      this.meta.removeTag('name="description"'); 
      this.meta.removeTag('name="keywords"'); 
      this.meta.addTags([
        {name: 'description', content: 'Jenix.in: Online Shopping India - Buy GPS Navigation System, CCTV Surveillance,WiFI Camera,HD Camera, IP cameras, DVR,NVR,PABX System, Sensor Module,Relay Module,Components,Controller Module,Power Supply,wire,Security System, Alarm Panel & Sensor, Electronic Lock,DIY KIT - Make your Self,Home Automation.'},
        {name: 'keywords', content: 'Jenix.in: Online Shopping India - Buy GPS Navigation System, CCTV Surveillance,WiFI Camera,HD Camera, IP cameras, DVR,NVR,PABX System, Sensor Module,Relay Module,Components,Controller Module,Power Supply,wire,Security System, Alarm Panel & Sensor, Electronic Lock,DIY KIT - Make your Self,Home Automation.'}
      ]);
      this.element = el.nativeElement;
  }
  result: any = [];
  profile : any;
  formdata : any;
  public name:any = 'Add to cart';
  ngOnInit() {
    this.WebserviceService.home().subscribe((data) => {
      this.profile = data;
      //console.log(this.profile);
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
    this.cartItems = items.length;
    items = JSON.stringify(items);    
    localStorage.setItem("CART", items);
    setTimeout(()=> {
      this.WebserviceService.updateCartItems(this.cartItems);
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
    // alert(this.formdata+' '+this.enquiryForm.value.message);
    window.location.href = surl+this.formdata+'?text='+this.enquiryForm.value.message+" Phone : "+this.enquiryForm.value.mobile;
  }

  socialtelegram(surl) {
    window.location.href = surl+'?url='+this.formdata+'&text='+this.enquiryForm.value.message+"Phone: "+this.enquiryForm.value.mobile;
  }

  socialsms(surl){
    window.location.href = surl+this.formdata+this.enquiryForm.value.message;
  }

  socialemail(surl) {
    window.location.href = surl+"?Subject="+this.enquiryForm.value.message+"&body="+this.formdata+"<br/> <br/> Message : "+this.enquiryForm.value.message+" <br/> <br/> Phone : "+this.enquiryForm.value.mobile;
  }

}
