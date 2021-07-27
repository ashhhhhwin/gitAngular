import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  employee:any[]=[
  {"name":"Ashwin","age":"20","dept":"HR"},
  {"name":"Vishal","age":"21","dept":"UI"},
  {"name":"Sam","age":"22","dept":"AI"},
  {"name":"Aniket","age":"23","dept":"LR"}
];

  ngOnInit(): void {
  }

}
