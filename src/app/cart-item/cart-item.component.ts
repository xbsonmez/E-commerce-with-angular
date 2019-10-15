import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  quantity: number;
  product: Product;

  

}
