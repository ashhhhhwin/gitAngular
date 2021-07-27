import { Component, OnInit } from '@angular/core';

import { dept } from 'src/Models/dept.models';
@Component({
  selector: 'app-deptcurd',
  templateUrl: './deptcurd.component.html',
  styleUrls: ['./deptcurd.component.css']
})
export class DeptcurdComponent implements OnInit {

  constructor() { }

getInfoDept:dept={};
  dt:dept[]=[{did:100,dname:"HR",dlocation:"Mumbai"},
  {did:101,dname:"Admin",dlocation:"Pune"},
  {did:102,dname:"AI",dlocation:"Jaipur"},
  {did:103,dname:"LD",dlocation:"Chennai"}
];

addDepartment()
{
  this.dt.push(this.getInfoDept);
  this.getInfoDept={};
}
msg:any;
deleteDept(did?:number)
{
  for(let i=0;i<this.dt.length;i++)
    {
      if(this.dt[i].did==did)
      {
        this.dt.splice(i,1);
        this.msg="Record Deleted!";
      }
      else{
        this.msg="Record NOT Found!";
      }
    }
    

  }
  updateDept()
{
  let k=this.getInfoDept.did;
    for(let i=0;i<this.dt.length;i++)
    {
      if(this.dt[i].did==k)
      {
        this.dt[i]=this.getInfoDept;
      this.getInfoDept={};
      this.msg="Record Updated!";
      }
      
    }
}
editDept(did?:number)
{
 
  for(let i=0;i<this.dt.length;i++)
    {
      if(this.dt[i].did==did)
      {
        this.getInfoDept=this.dt[i];
      }
      
    }
}
ngOnInit(): void {
}
}

  


