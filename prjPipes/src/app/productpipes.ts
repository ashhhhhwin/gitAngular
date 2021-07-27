import { Pipe, PipeTransform } from "@angular/core";


@Pipe(
    {
        name:'productfilterpipe'
    }
)
export class ProductFilterPipe implements PipeTransform
{
    transform(product:any,searchtext:any)
    {
        if(searchtext)
        {
            return product.filter((x: { pname: string, price:string; })=>x.pname.toLowerCase().startsWith(searchtext.toLowerCase()));
        }
    }
}