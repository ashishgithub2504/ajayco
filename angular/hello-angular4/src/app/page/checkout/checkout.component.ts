import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../../services/webservice.service';
declare var Razorpay: any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  loadAPI: Promise<any>;
  constructor() { }
  cartItem : [];
  Razorpay : any;
  ngOnInit() {
    this.cartItem = JSON.parse(localStorage.getItem('CART')) || [];
  }
  
  pay(price) {
    
    var options = {
      "key": "rzp_test_YdtB3w9X200lvb",
      "amount":price*100, // 2000 paise = INR 20
      "name": " Ajay & Company",
      "description": "Order #7890",
      "image" : "http://phpdev.co.in/assets/img/logo.png",
      "handler": function (response){
          console.log(response);
          alert(response.razorpay_payment_id);
         },
      "prefill": {
          "name":  "anshu",
          "email": "ashsih@gmail.com",
          "contact": "8619089370",
     },
      "notes": {  },
      "theme": {
          "color": "#F37254"
      }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();

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

  getSum(index: number) : number {
    let sum = 0;
    for(let i = 0; i < this.cartItem.length; i++) {
      sum += this.cartItem[i][index];
    }
    return sum;
  }

}
