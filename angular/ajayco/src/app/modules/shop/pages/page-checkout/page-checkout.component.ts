import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../../../shared/services/cart.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { RootService } from '../../../../shared/services/root.service';
declare var Razorpay: any;
@Component({
    selector: 'app-checkout',
    templateUrl: './page-checkout.component.html',
    styleUrls: ['./page-checkout.component.scss']
})
export class PageCheckoutComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject();
    result:any;
    amountpay:any;
    Razorpay : any;
    paymentId: any;
    constructor(
        public root: RootService,
        public cart: CartService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.cart.quantity$.pipe(takeUntil(this.destroy$)).subscribe(quantity => {
            if (!quantity) {
                this.router.navigate(['../cart'], {relativeTo: this.route}).then();
            }
        });
        this.amountpay = localStorage.getItem('cartTotal');
    }

    pay(price) {
        
        let options:any = {
        // your options
        }
        options = {
              "key": "rzp_test_YdtB3w9X200lvb",
              "amount":parseInt(price)*100, // 2000 paise = INR 20
              "name": " Ajay & Company",
              "description": "Order #2443", //+this.result.data.order_no,
              "image" : "http://phpdev.co.in/assets/img/logo.png",
              "handler": this.paymentCapture.bind(this),
              // "handler": function (response){
              //     console.log(response);
              //   
              // },
              // "prefill": {
              //     "name":  "anshu",
              //     "email": "ashsih@gmail.com",
              //     "contact": "8619089370",
              //   },
              "notes": {  },
              "theme": {
                  "color": "#F37254"
                }
            };
          var rzp1 = new Razorpay(options);
          rzp1.open();
        
      }
    
    paymentCapture(response) {
      
    }


    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
