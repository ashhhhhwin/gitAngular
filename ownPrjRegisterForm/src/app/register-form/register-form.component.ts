import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,AbstractControl } from "@angular/forms";
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm:any;
  constructor(private fb:FormBuilder) {
    this.registerForm=this.fb.group({
      name:['',Validators.required],
      phn:['',[Validators.required]],
      mailid:['',Validators.email],
      pwd:['',[Validators.required,Validators.minLength(6)]]
    })

   }
   phnFormat:any="^\d{3}-\d{3}-\d{4}$";

   phoneValidators(control:AbstractControl):{[key:string]:boolean}|null
   {
    if(control.value!=undefined && (control.value.match(this.phnFormat)))
    {
      return{'phnValid':true};
    }
    return null;
   }
   createAccount()
   {

   }
  ngOnInit(): void {
  }

}
