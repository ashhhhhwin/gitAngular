import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { customer } from 'src/Models/customer.model';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }
cust:customer={};
  ngOnInit(): void {
  }

  onRegister(cForm:NgForm)
  {
    console.log(this.cust);
  }
}
