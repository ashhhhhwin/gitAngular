import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/employee.model';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css']
})
export class EmployeecrudComponent implements OnInit {

  constructor() { }

  emp:Employee[]=[{empID:1001,empFirstName:"Ashwin",empLastName:"Selvarangan",empSalary:"100"},
  {empID:1002,empFirstName:"Vishal",empLastName:"Iyer",empSalary:"150"},
  {empID:1003,empFirstName:"Aniket",empLastName:"Sonawane",empSalary:"200"},
  {empID:1004,empFirstName:"Saloni",empLastName:"Kothari",empSalary:"250"}
];

  getInfoEmployee:Employee={};
  msg:any;
  addEmployee()
  {
    this.emp.push(this.getInfoEmployee);
    this.getInfoEmployee={};
  }
  deleteEmployee(empID?:number)
  {
    for(let i=0;i<this.emp.length;i++)
    {
      if(this.emp[i].empID==empID)
      {
        this.emp.splice(i,1);
        this.msg="Record Deleted!";
      }
      else{
        this.msg="Record NOT Found!";
      }
    }
  }
  employeeid:any;
  EditEmployee(empid?:number)
  {
    for(let i=0;i<this.emp.length;i++)
    {
      this.getInfoEmployee=this.emp[i];
    }
  }

  updateEmployee()
  {
    let k=this.getInfoEmployee.empID;
    for(let i=0;i<this.emp.length;i++)
    {
      this.emp[i]=this.getInfoEmployee;
      this.getInfoEmployee={};
      this.msg="Record Updated!"
    }
  }
  ngOnInit(): void {
  }

}
