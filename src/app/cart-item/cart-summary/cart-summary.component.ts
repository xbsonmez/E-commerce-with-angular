import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CartItemComponent } from '../cart-item.component';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit, DoCheck {
 constructor(private cartService: CartService) { }

  totalCartItemNumber: number;
  totalCartItemPriceNumber: number;
  cartItem: CartItemComponent[];
  isButtonVisible = true;
  

  ngOnInit() {
    this.cartItem = this.cartService.listed();
 


  }
  ngDoCheck() {
    this.cartItem = this.cartService.list();
    this.totalCartItemPriceNumber =
    this.cartService.list().reduce((a, b) => a + b.quantity * b.product.unitPrice, 0); 
    this.totalCartItemNumber = this.cartService.list().reduce((a, b) => a + b.quantity, 0);
    this.isButtonVisible = this.totalCartItemNumber > 0 ? true : false;
 
     
   
  }
  deleteAllCartFromBasket() {

    this.cartService.deleteAllCarts();

  }



}
