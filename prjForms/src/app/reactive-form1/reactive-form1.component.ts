import { Component, OnInit } from '@angular/core';
//import { FormControl,FormGroup, Validators } from '@angular/forms';
import { AbstractControl, FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form1',
  templateUrl: './reactive-form1.component.html',
  styleUrls: ['./reactive-form1.component.css']
})
export class ReactiveForm1Component implements OnInit {
  //loginForm:FormGroup;
  loginForm:any;
  constructor(private fb:FormBuilder) { 
    /*this.loginForm=new FormGroup({mailid: new FormControl(null,[Validators.required,Validators.email]),
    pwd:new FormControl(null,Validators.required)}); //null is default value you want to pass to the webpage*/
    this.loginForm=this.fb.group({mailid:['',[Validators.required,Validators.email]],
  pwd:['',Validators.required],age:['',[this.ageRangeValidator]]});
    ;
  }
  ageRangeValidator(control:AbstractControl):{[key:string]:boolean}|null

  {
      if(control.value!==undefined && (isNaN(control.value) ||control.value <18 || control.value >45))
      {
        return {'ageRange':true};
      }
      return null;
  }

  doLogin()
  {

  }
  ngOnInit(): void {
  }

}
