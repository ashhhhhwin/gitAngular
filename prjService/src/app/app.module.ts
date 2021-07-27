import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './productService';
import { DisplayProductComponent } from './display-product/display-product.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayProductComponent,
    ProductinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
