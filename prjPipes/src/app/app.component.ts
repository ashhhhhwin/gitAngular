import { Component } from '@angular/core';
import { ProductFilterPipe } from './productpipes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to learn Pipes';
  todaydate?:Date;
  products?:any[];
  searchtext?:any;


  ngOnInit()
  {
    this.todaydate=new Date();
    this.products=[
      {id:1,pname:"Pen",price:20},
      {id:2,pname:"Book",price:25},
      {id:3,pname:"Paper",price:30},
      {id:4,pname:"Pencil",price:10},

    ]
  }
}
