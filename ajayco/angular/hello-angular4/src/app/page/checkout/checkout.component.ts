import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  loadAPI: Promise<any>;
  constructor() { }
  Razorpay : any;
  ngOnInit() {
  }
//   options = {
//     "key": "rzp_test_YdtB3w9X200lvb", // Enter the Key ID generated from the Dashboard
//     "amount": "29935", // Amount is in currency subunits. Default currency is INR. Hence, 29935 refers to 29935 paise or INR 299.35.
//     "currency": "INR",
//     "name": "Acme Corp",
//     "description": "A Wild Sheep Chase is the third novel by Japanese author  Haruki Murakami",
//     "image": "http://localhost:4200/assets/img/logo.png",
//     "order_id": "order_Cmq32jUp1YqOmD",//Order ID is generated as Orders API has been implemented. Refer the Checkout form table given below
//     "handler": function (response){
//         console.log(response);
//         alert(response.razorpay_payment_id);
//     },
//     "prefill": {
//         "name": "Gaurav Kumar",
//         "email": "ashish.jain@girnarsoft.com"
//     },
//     "notes": {
//         "address": "note value"
//     },
//     "theme": {
//         "color": "#F37254"
//     }
// };
  pay() {

    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }

    if (!isFound) {
        var dynamicScripts = ["https://checkout.razorpay.com/v1/checkout.js"];
        let fnode = document.createElement('form');
        fnode.setAttribute('action','http://localhost:4200/success/');
        fnode.setAttribute('method','post');
        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node['data-prefill'] = {};
            node['data-theme'] = {};
            node['data-notes'] = {};
            node['src'] = dynamicScripts [i];
            node['type'] = 'text/javascript';
            node.setAttribute('data-key','rzp_test_YdtB3w9X200lvb');
            node.setAttribute('data-amount','4900');
            node.setAttribute('data-currency','INR');
            node.setAttribute('data-order_id','order_D2f11GQBVdWF3j');
            node.setAttribute('data-buttontext','Pay with razorpay');
            node.setAttribute('data-name','anshu corp');
            node.setAttribute('data-description','Wild Sheep Chase is the third novel by');
            node.setAttribute('data-image','https://example.com/your_logo.jpg');
            node.setAttribute('data-prefill.name','ahish jain');
            node.setAttribute('data-prefill.email','anshu@gmail.com');
            node.setAttribute('data-theme.color','#F37254');
            // node.async = false;
            // node.charset = 'utf-8';
            document.getElementById('paymentrazor').innerHTML = '';
            document.getElementById('paymentrazor').appendChild(fnode).appendChild(node);
            // document.getElementsByTagName('head')[0].appendChild(node);
            console.log(node);
        }
        
    }

    //$.getScript('https://checkout.razorpay.com/v1/checkout.js', function() {
        // var rzp1 = new Razorpay(this.options);
        // rzp1.open();
   // });
  //  var rzp1 = new Raz  orpay(this.options);
    // document.getElementById('rzp-button1').onclick = function(e){
       // rzp1.open();
        // e.preventDefault();
    // }
  }

}
