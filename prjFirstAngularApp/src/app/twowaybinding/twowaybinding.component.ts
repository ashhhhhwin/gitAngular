import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  constructor() { }
  uname:string="Ash";
  car:any[]=[{"name":"Alto","color":"Red","model":"LXI"},
  {"name":"WagonR","color":"Blue","model":"LX"},
  {"name":"Swift","color":"Red","model":"LXI"},
  {"name":"Desire","color":"Grey","model":"LXI"}];


  ngOnInit(): void {
  }

}
