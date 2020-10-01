import { ShopService } from './../../_services/shop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: any;
  showing: 0;
  constructor(
    public shopService: ShopService,
  ) { }

  ngOnInit(): void {
    this.products();
  }

  products(){
    this.shopService.products().subscribe(
      data => {
        this.productsList = data;
        this.showing = this.productsList.length;
      });
  }
}
