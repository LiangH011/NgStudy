import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  public currentStyles: {};
  public canSave:boolean=false;
  public isUnchanged:boolean=false;
  public isSpecial:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  setStyles() {
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '36px'   : '12px'
    };
  }

}


