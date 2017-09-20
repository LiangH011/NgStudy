import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  heroes:Array<any>=[
    {name:"人族"},
    {name:"虫族"},
    {name:"神族"}
  ];

}
