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
  _itemCount: number=0;
  newEntry: dailyExpensesFormat = {
    itemName:'',
    itemCategory:'',
    itemCount:0,
    itemDesc:'',
    itemCost:null
  };

  constructor(public deSer: DailyExpensesService) { }

  ngOnInit() {
    this.tableItemsList = this.deSer.sendData();
    this.deSer.sendObvData().subscribe((response:dailyExpensesFormat[])=>{
      this.tableItemsList = response;
    })
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

  onSubmitted(){
    // this.newEntry.itemName = this._itemName;
    // this.newEntry.itemCategory = this._itemCategory;
    // this.newEntry.itemDesc = this._itemDesc;
    // this.newEntry.itemCost = this._itemCost;

    this.newEntry.itemCount = this.itemsCount;
    if(this.itemsCount===0) this.newEntry.itemCount = 1;
    if(this.newEntry.itemDesc===null || this.newEntry.itemDesc === " ") this.newEntry.itemDesc = "No Description Provided";
    this.deSer.addData(this.newEntry);
  }

  tableHider(){
    this.tableToggler = !this.tableToggler;
  }

}
