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
  getSum(index: number) : number {
    let sum = 0;
    for(let i = 0; i < this.cartItem.length; i++) {
      sum += this.cartItem[i][index];
    }
    return sum;
  }
}
