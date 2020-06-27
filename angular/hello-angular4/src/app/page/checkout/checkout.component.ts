import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { WebserviceService } from '../../services/webservice.service';
import { Router } from '@angular/router';
declare var Razorpay: any;
declare var bolt: any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  loadAPI: Promise<any>;
  checkoutForm = new FormGroup({
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
    mobile: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    zip_code: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
  });
  constructor(private WebserviceService:WebserviceService,private router: Router) { }
  cartItem : [];
  result:any;
  Razorpay : any;
  bolt : any;
  paymentId: any;
  txnid: any;
  ngOnInit() {
    this.cartItem = JSON.parse(localStorage.getItem('CART')) || [];
    console.log(this.cartItem);
  }
  
  pay(price) {
    console.log(this.cartItem);
    let random = 'Txn'+Math.floor(Math.random() * (999999 - 100000)) + 100000;
    this.txnid = random;
    let options:any = {
    // your options
    }
    if(this.checkoutForm.value.first_name.length == '0'){
      this.checkoutForm.value.first_name.addClass('error');
    }
    //this.WebserviceService.showLoading(); this.signupForm.value
    this.WebserviceService.createOrder(this.cartItem,price,this.txnid,this.checkoutForm.value).subscribe((data) => {
      this.result = data; 
      if(this.result.status == true) {
        // alert(random);
        // options = {
        //   "key": "Tgjxsf1A",
        //   "amount":price, // 2000 paise = INR 20
        //   "hash" : this.result.hash,
        //   "txnid" :random,
        //   "firstname": "ashish",
        //   "email":"jain@test.com",
        //   "phone":"9928519150",
        //   "productinfo":"jenix",
        //   "udf5":"jenix",
        //   "surl" : "https://jenix.in/thanks",
        //   "furl": "https://jenix.in/fail",
        //   "mode": 'dropout',
          // "description": "Order #"+this.result.data.order_no,
          // "image" : "assets/img/JENIX logo color 600x213.png",
          //"handler": this.paymentCapture.bind(this),
          // "handler": function (response){
          //     console.log(response);
          //   
          // },
          // "prefill": {
          //     "name":  "anshu",
          //     "email": "ashsih@gmail.com",
          //     "contact": "8619089370",
          //   },
          // "notes": {  },
          // "theme": {
          //     "color": "#F37254"
          //   }
        //};
        // alert(price);
        // var obj = new bolt();
        bolt.launch({
            key: "Tgjxsf1A",
            txnid :this.txnid,
            hash : this.result.hash,
            amount:parseInt(price), // 2000 paise = INR 20
            firstname: this.checkoutForm.value.first_name,
            email:this.checkoutForm.value.email,
            phone:this.checkoutForm.value.mobile,
            productinfo:"jenix",
            udf5:"BOLT_KIT_PHP7",
            surl : "https://jenix.in/thanks",
            furl: "https://jenix.in/fail",
            mode: 'dropout',
          },{ responseHandler: function(BOLT){
            this.WebserviceService.hideLoading();
                console.log( BOLT );     
                if(BOLT.response.txnStatus != 'CANCEL')
                {
                    
                } else {
                    
                }
            },
            catchException: function(BOLT){
                console.log( BOLT );
            }
      });

      // var rzp1 = new Razorpay(options);
      // rzp1.open();

      } else {
        alert(this.result.message);
      }
      
    });    
    
    // var isFound = false;
    // var scripts = document.getElementsByTagName("script")
    // for (var i = 0; i < scripts.length; ++i) {
    //     if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
    //         isFound = true;
    //     }
    // }

    // if (!isFound) {
    //     var dynamicScripts = ["https://checkout.razorpay.com/v1/checkout.js"];
    //     let fnode = document.createElement('form');
    //     fnode.setAttribute('action','http://localhost:4200/success/');
    //     fnode.setAttribute('method','post');
    //     for (var i = 0; i < dynamicScripts.length; i++) {
    //         let node = document.createElement('script');
    //         node['data-prefill'] = {};
    //         node['data-theme'] = {};
    //         node['data-notes'] = {};
    //         node['src'] = dynamicScripts [i];
    //         node['type'] = 'text/javascript';
    //         node.setAttribute('data-key','rzp_test_YdtB3w9X200lvb');
    //         node.setAttribute('data-amount','4900');
    //         node.setAttribute('data-currency','INR');
    //         node.setAttribute('data-order_id','order_D2f11GQBVdWF3j');
    //         node.setAttribute('data-buttontext','Pay with razorpay');
    //         node.setAttribute('data-name','anshu corp');
    //         node.setAttribute('data-description','Wild Sheep Chase is the third novel by');
    //         node.setAttribute('data-image','https://example.com/your_logo.jpg');
    //         node.setAttribute('data-prefill.name','ahish jain');
    //         node.setAttribute('data-prefill.email','anshu@gmail.com');
    //         node.setAttribute('data-theme.color','#F37254');
    //         // node.async = false;
    //         // node.charset = 'utf-8';
    //         document.getElementById('paymentrazor').innerHTML = '';
    //         document.getElementById('paymentrazor').appendChild(fnode).appendChild(node);
    //         // document.getElementsByTagName('head')[0].appendChild(node);
    //         console.log(node);
    //     }
        
    // }
  }


  paymentCapture(response) {
    this.WebserviceService.showLoading();
    this.paymentId = response.razorpay_payment_id;
    this.WebserviceService.completeOrder(response.razorpay_payment_id,this.result.data.id)
    .subscribe((data) => {
      this.WebserviceService.hideLoading();
      console.log(data);
      this.router.navigate(['/']);
    });
    console.log("payment id "+this.paymentId);
    //TODO
 }

  getSum(index: string, qty: string) : number {
    let sum = 0;
    for(let i = 0; i < this.cartItem.length; i++) {
      sum += this.cartItem[i][index]*this.cartItem[i][qty];
    }
    return sum;
  }

}
