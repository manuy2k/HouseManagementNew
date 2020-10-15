import { DailyExpensesService } from './../../../Services/daily-expenses.service';
import { dailyExpensesFormat } from './../../dailyExpensesFormat';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-daily-expenses',
  templateUrl: './daily-expenses.component.html',
  styleUrls: ['./daily-expenses.component.css']
})
export class DailyExpensesComponent implements OnInit {

  itemsCount: number = 0;
  tableToggler: boolean = true;
  tableItemsList: dailyExpensesFormat[];
  displayedColumns:string[]= ['iName','iCategory','iCount','iCost'];

  _itemName:string="";
  _itemCategory:string="";
  _itemCount: number=0;
  _itemDesc:string="";
  _itemCost:number=0;

  constructor(public deSer: DailyExpensesService) { }

  ngOnInit() {
    this.tableItemsList = this.deSer.sendData();
  }

  onSubmitted(incVal:NgForm){
    this._itemName = incVal.value.itemName;
    this._itemCategory = incVal.value.itemCategory;
    this._itemCount = this.itemsCount;
    this._itemDesc = incVal.value.itemDesc;
    this._itemCost = incVal.value.itemCost;
    console.log("From On Submitted Method",incVal.value);
  }

  tableHider(){
    this.tableToggler = !this.tableToggler;
  }

  bokkale(val:number){
    if(val==1){
      this.itemsCount++;
    }
    if(val==0){
      if(this.itemsCount==0)
      return;
      this.itemsCount--;
    }
  }

}
