import { Component, OnInit } from '@angular/core';
import { exit } from 'process';

@Component({
  selector: 'app-daily-expenses',
  templateUrl: './daily-expenses.component.html',
  styleUrls: ['./daily-expenses.component.css']
})
export class DailyExpensesComponent implements OnInit {

  itemsCount: number = 0;
  tableToggler: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  tableHider(){
    this.tableToggler = !this.tableToggler;
  }

  IncDec(val){
    if(val==1){
      this.itemsCount++;
      console.log("Increment");
    }
      
    if(val==0){
      if(this.itemsCount==0)
      return;
      this.itemsCount--;
      console.log("Decrement");
    }
      
  }

}
