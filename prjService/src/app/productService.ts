import { Injectable } from "@angular/core";
import { Product } from "src/Models/products";

@Injectable()
export class ProductService
{
    product:Product[];
    constructor()
    {
        this.product=[{pid:11,pname:'pencil',price:10,quantity:20,image:'assets/images/pencil.jpg',desc:'No discount'},
        {pid:12,pname:'ball',price:15,quantity:20,image:'assets/images/ball.jpg',desc:'10% discount'},
        {pid:11,pname:'doll',price:10,quantity:20,image:'assets/images/doll.jpg',desc:'20% discount'},
    ];
    }

    getProducts()
    {
        debugger;

        return this.product;
    }

    getProductInfo(prodid:number)
    {
        let pininfo;
        this.product.forEach(ele=>{
            if(ele.pid==prodid)
            {
                pininfo=ele;
            }
        });
        return pininfo;
    }

}