import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: '<h1>Page Not Found!</h1>',
  styles: ['h1{color:red}','p{font-size:30px}']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
