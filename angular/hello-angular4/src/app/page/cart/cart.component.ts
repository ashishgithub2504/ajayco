import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  cartItem : [];
  ngOnInit() {
    this.cartItem = JSON.parse(localStorage.getItem('CART')) || [];
    console.log( this.cartItem);
  }
  removeitem(id) {
    var items = JSON.parse(localStorage.getItem("CART")) || [];
    for (var i =0; i< items.length; i++) {
        var item = items[i];
        if (item.id == id) {
            items.splice(i, 1);
        }
    }
    items = JSON.stringify(items);    
    localStorage.setItem("CART", items);
    this.cartItem = JSON.parse(localStorage.getItem('CART')) || [];
  }
  getSum(index: string, qty: string) : number {
    let sum = 0;
    for(let i = 0; i < this.cartItem.length; i++) {
      sum += this.cartItem[i][index]*this.cartItem[i][qty];
    }
    return sum;
  }
}
