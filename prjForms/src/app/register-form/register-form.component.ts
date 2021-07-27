import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerfrom:any;
  constructor(private fb:FormBuilder) {
    this.registerfrom=this.fb.group({
      name:['',Validators.required],eid:['',Validators.required,Validators.email],
      pwd:['',Validators.required],cpwd:['',Validators.required],phn:['']
    }

    )
   }
   pwdPattern:string="^[a-zA-Z0-9]{10}$";
  /* passwordValidator(control:AbstractControl):{[key:string]:boolean}|null
  {
      if(control.value!=undefined && (!control.value.match(this.pwdPattern)))
      {
        return {'pwdRange':true};
      }
      return null;
    }*/



  ngOnInit(): void {
  }

}
