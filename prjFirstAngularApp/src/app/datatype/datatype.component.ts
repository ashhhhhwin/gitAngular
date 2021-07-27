import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatype',
  templateUrl: './datatype.component.html',
  styleUrls: ['./datatype.component.css']
})
export class DatatypeComponent implements OnInit {

  //declaring variable
  name:string="Ashwin"
  age:number;
  hobbies:string[];
  marks:Array<number>;
  IsTrue:boolean;
  tuplevel:[string,number,boolean];
  dynamicValue:any;
  student:any;
  picture:any="assets/images/ball.jpg";
  constructor() {
    this.age=30;
    this.hobbies=["Plaing","Singing"];
    this.marks=[90,78,89];
    this.IsTrue=false;
    this.tuplevel=["Pune",1200,true];
    this.dynamicValue=89;
    this.student={fathername:"Raj",Address:"TNB Road Chennai-42"}
   }


  ngOnInit(): void {
  }

}
