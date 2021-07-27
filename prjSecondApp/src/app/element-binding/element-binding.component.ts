import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-binding',
  templateUrl: './element-binding.component.html',
  styleUrls: ['./element-binding.component.css']
})
export class ElementBindingComponent implements OnInit {

  constructor() { }

  ngOnInit()
  {
     }
  
  welcomeMsg()
  {
    debugger;
    alert("GoodMorning!");
 
  }
  fname:any;
  displayFullname(name:HTMLInputElement)
  {
    debugger;
    this.fname=name.value+"Kumar";
  }
  calbonus:any;
  displayBonus(sal:HTMLInputElement)
  {
    this.calbonus=parseInt(sal.value)+1000;
  }

 
}
