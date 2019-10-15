import { Injectable } from '@angular/core';
import { Product } from '../../product/product'
import { CartItemComponent } from '../cart-item.component'
import { CART_ITEM_LIST } from '../cart-item-list'  
import { CookieService } from 'ngx-cookie-service';
import { CART_ITEM_COOKIE_LIST } from '../cart-item-cookie-list'  

@Injectable()
export class CartService {
    
  cartItems: CartItemComponent[];
  objArr = [];

  
  constructor(private cookie: CookieService) { }
   
  addToCart(product: Product): void {

    var c = false;
    var x;
    for (var i = 0; i < CART_ITEM_LIST.length; i++) {
      if (CART_ITEM_LIST[i].product.productId == product.productId && CART_ITEM_COOKIE_LIST[i].product.productId == product.productId) {       
        c = true;
        x = i;
        break;
      }
    }
    var cartItemJSON = {};
    console.log(c);
    if (c == true) {
       
      CART_ITEM_LIST[x].quantity += 1;
      CART_ITEM_COOKIE_LIST[x].quantity = CART_ITEM_LIST[x].quantity;

     
      //this.objArr.push(cartItemJSON);
      //this.cookie.set('items', JSON.stringify(this.objArr))
    }
    else{
      
      var cartItem = new CartItemComponent();
      cartItem.product = product;
      cartItem.quantity = 1;
      console.log(cartItem);
      CART_ITEM_LIST.push(cartItem);
      
       cartItemJSON = {
        "product": cartItem.product,
        "quantity": cartItem.quantity
                         };
      //this.objArr.push(cartItemJSON);
      //this.cookie.set('items', JSON.stringify(this.objArr));
      CART_ITEM_COOKIE_LIST.push(cartItemJSON);
    }
    this.cookie.set('items', JSON.stringify(CART_ITEM_COOKIE_LIST));

  }



  list(): CartItemComponent[] {

    return CART_ITEM_LIST;
  }

  listed(): CartItemComponent[] {
    
    if (this.cookie.get('items') != '') {
    var obj = [];
    var g;
 
    obj = JSON.parse(this.cookie.get('items'));
    for (var k = 0; k <= obj.length - 1; k++) {
      g = obj[k];
        CART_ITEM_LIST.push(g);
        CART_ITEM_COOKIE_LIST.push(g);       
      }
    }
    return CART_ITEM_LIST;

  }
  
 

  removeFromCart(product: Product) {
    var addedItem = CART_ITEM_LIST.find(t => t.product.productId == product.productId);
    var indexNo = CART_ITEM_LIST.indexOf(addedItem);
    if (indexNo != -1) {
      CART_ITEM_LIST.splice(indexNo, 1);
    }
  }

  deleteAllCarts() {
    var c = CART_ITEM_COOKIE_LIST.length;
    var t = CART_ITEM_LIST.length;
    for (var i = 0; i <c; i++) {
      CART_ITEM_COOKIE_LIST.pop();
    }
    for (var i = 0; i < t; i++) {
      CART_ITEM_LIST.pop();
    }    
    this.cookie.deleteAll();

    
  }
}
