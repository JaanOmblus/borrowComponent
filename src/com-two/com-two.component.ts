import { Component, OnInit } from '@angular/core';
import { ComOneComponent } from '../com-one/com-one.component';
@Component({
  selector: 'app-com-two',
  templateUrl: './com-two.component.html',
  styleUrls: ['./com-two.component.css']
})
export class ComTwoComponent implements OnInit {

  data: any;
  compOneData: any;
  constructor() { } 

  ngOnInit() {
    let myCompOneObj = new ComOneComponent();
     this.compOneData = myCompOneObj.compOneData;
  }

  callFun() {
    let myCompOneObj = new ComOneComponent();
    this.data = myCompOneObj.myFunctionOne()
  }

}