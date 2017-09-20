import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-bind',
  templateUrl: './value-bind.component.html',
  styleUrls: ['./value-bind.component.css']
})
export class ValueBindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imgSrc='./assets/imgs/1.jpg';

  changeSrc(){
    if(Math.ceil(Math.random()*1000000000)%2){
      this.imgSrc='./assets/imgs/2.jpg';
    }else{
      this.imgSrc='./assets/imgs/1.jpg';
    }
  }

}
