import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from "./product.service";
import { CartService } from '../cart-item/service/cart.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService] 
})
export class ProductComponent implements OnInit { 
  products: Product[];  
  addedProduct: string
  constructor(private productService: ProductService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute ) { } 

  ngOnInit() {
   
    this.activatedRoute.params.subscribe(params => {
      this.getProduct(params["seoUrl"]);
    })
  }
  getProduct(seoCategory: string) {
    this.productService.getProducts(seoCategory).subscribe(response => {
      this.products = response

    });
    
  }
  addToCard(product: Product) {
    this.addedProduct = product.productName;
    this.cartService.addToCart(product);

  }

}
