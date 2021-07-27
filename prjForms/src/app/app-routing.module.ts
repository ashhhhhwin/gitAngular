import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveForm1Component } from './reactive-form1/reactive-form1.component';
import { TemplateFormComponent } from './template-form/template-form.component';





const routes: Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:TemplateFormComponent},
  {path:'login',component:ReactiveForm1Component},
  {path:'**',component:NotFoundComponent}
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
