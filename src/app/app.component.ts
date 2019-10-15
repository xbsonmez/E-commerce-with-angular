import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "products/:seoUrl",
    component: ProductComponent
  }
  ]

  @NgModule({
    
    imports: [
    
    RouterModule.forRoot(appRoutes)
    
  ]
    
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'PRODUCTS';


}

