import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/Models/courses';
import { CourseInfo } from '../courseinfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses?:Courses[];
  constructor(private ci:CourseInfo) {
    

   }

  ngOnInit(): void {
    debugger;
    this.displayCourseInfo();
  }
  displayCourseInfo()
  {
    this.courses=this.ci.getCourses();
  }

}
