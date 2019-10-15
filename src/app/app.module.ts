import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CartService } from './cart-item/service/cart.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartSummaryComponent } from './cart-item/cart-summary/cart-summary.component';
import { CookieService } from 'ngx-cookie-service';
import { ProductVatPipe } from './product/pipe/product-vat.pipe';
import { ProductFilterPipe } from './product/pipe/product-filter.pipe';
import { FormsModule } from "@angular/forms";
import { CategoryComponent } from './cart-item/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartItemComponent,
    CartSummaryComponent,
    ProductVatPipe,
    ProductFilterPipe,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [{
    provide: 'apiUrl',
    useValue: "http://northwindapi.azurewebsites.net/api"
  }, CartService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
