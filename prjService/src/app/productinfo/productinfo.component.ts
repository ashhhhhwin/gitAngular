import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ProductService } from '../productService';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  constructor(private pser:ProductService,private route:ActivatedRoute) { }

 

  ngOnInit(): void {
    this.getSelectPro();
  }
  selectedPro:any;
  getSelectPro()
  {
    this.selectedPro=this.pser.getProductInfo(this.route.snapshot.params.id);
  }
  

}


