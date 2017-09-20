import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-nav',
  templateUrl: './safe-nav.component.html',
  styleUrls: ['./safe-nav.component.css']
})
export class SafeNavComponent implements OnInit {
  public currentRace:any=null;//{name:'神族'};
  constructor() { }

  ngOnInit() {
  }

}
