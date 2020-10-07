import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  cartItems = 1;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('cart-id') != null){
      this.cartItems = JSON.parse(localStorage.getItem('cart-products')).length;
    }
    console.log(this.cartItems)
  }

}
