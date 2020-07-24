import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicScriptLoaderService } from 'src/app/dynamic-script-loader.service';
import { WebserviceService } from 'src/app/services/webservice.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  enquiryForm = new FormGroup({
    product_id: new FormControl('',Validators.required),
    first_name: new FormControl('',Validators.required),
    mobile: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),
  });
  constructor(private meta: Meta,public activeRoute: ActivatedRoute, 
    private dynamicScriptLoader: DynamicScriptLoaderService,
    public WebserviceService: WebserviceService) { }
  result : any;
  formdata : any;
  public name:any = 'Add to cart';
  public qty:number = 1;
  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.WebserviceService.productDetails(routeParams.id).subscribe((data) => {
        this.result = data;
        this.meta.removeTag('name="description"'); 
        this.meta.removeTag('name="keywords"'); 
        this.meta.addTags([
          {name: 'description', content: this.result.data.title},
          {name: 'keywords', content: this.result.data.title}
        ]);
        if(this.result.status == false) {
            alert(this.result.message);
        }
        this.loadScript();
        console.log(this.result);
        console.log(this.name);   
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
    }, 500);
  }

  openModel(pid) {
    this.formdata = 'www.jenix.in/'+pid;
    this.enquiryForm.controls['product_id'].setValue(pid);
  }

  onSubmit() {
    this.WebserviceService.enquiry(this.enquiryForm.value)
    .subscribe((data) => {
      this.result = data;
      console.log(this.result);
      if(this.result.status == true) {
        alert(this.result.message);
        window.location.reload();
      } else {
        alert(this.result.message);
        window.location.reload();
      }     
    });
  }

  public loadScript() {
    this.dynamicScriptLoader.load('main').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));   
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
