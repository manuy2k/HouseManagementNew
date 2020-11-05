import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raise-capital',
  templateUrl: './raise-capital.component.html',
  styleUrls: ['./raise-capital.component.css']
})
export class RaiseCapitalComponent implements OnInit {

  allotedAmount:number = 10000;
  remainingAmount:number = 2000;
  raiseAmount: number;
  monthDate:Date = new Date;
  constructor() { }

  ngOnInit() {
  }

  nowRaise(){
    this.remainingAmount = this.remainingAmount + this.raiseAmount;
    this.raiseAmount = 0;
  }

}
