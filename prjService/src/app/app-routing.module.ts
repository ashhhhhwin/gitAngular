import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayProductComponent } from './display-product/display-product.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';

const routes: Routes = [
  {
    path:'listofproducts',component:DisplayProductComponent
  },
  {
    path:'productinfo/:id',component:ProductinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
