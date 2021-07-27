import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Models/products';
import { ProductService } from '../productService';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  pro?: Product[];
  constructor(private pservice:ProductService) { }

  

  ngOnInit(): void {
    debugger;
    this.displayProductDetails();
  }
  displayProductDetails()
  {
    debugger;
    this.pro=this.pservice.getProducts();
  }

}
