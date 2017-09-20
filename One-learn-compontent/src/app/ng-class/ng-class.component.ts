import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  currentClasses: {};
  saveable:boolean = true;
  modified:boolean = true;
  special:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  setCurrentClasses() {
    this.currentClasses = {
      "saveable": this.saveable,
      "modified": this.modified,
      "special": this.special
    };
  }
}
