import { DailyExpensesService } from './../../../Services/daily-expenses.service';
import { dailyExpensesFormat } from './../../dailyExpensesFormat';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';



@Component({
  selector: 'app-daily-expenses',
  templateUrl: './daily-expenses.component.html',
  styleUrls: ['./daily-expenses.component.css']
})
export class DailyExpensesComponent implements OnInit {

  tableItemsList: dailyExpensesFormat[];
  displayedColumns:string[]= ['iName','iCategory','iCount','iCost'];

  itemsCount: number = 0;

  deForm: FormGroup;

  // newEntry: dailyExpensesFormat  = {
  //   itemName:'',
  //   itemCategory:'',
  //   itemCount:0,
  //   itemDesc:'',
  //   itemCost:null
  // };



  constructor(public deSer: DailyExpensesService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.tableItemsList = this.deSer.sendData();
    this.deSer.sendObvData().subscribe((response:dailyExpensesFormat[])=>{
      this.tableItemsList = response;
    });
    this.deForm = this.fb.group({
      'itemName': [''],
      'itemCategory':[''],
      'itemDesc': [''],
      'itemCost':[],
      'itemCount':[]
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
    // .......................template driven form with two way data binding approach
    // .
    // .
    // .
    // .
    // this.newEntry.itemName = this._itemName;
    // this.newEntry.itemCategory = this._itemCategory;
    // this.newEntry.itemDesc = this._itemDesc;
    // this.newEntry.itemCost = this._itemCost;

    // this.newEntry.itemCount = this.itemsCount;
    // if(this.itemsCount===0) this.newEntry.itemCount = 1;
    // if(this.newEntry.itemDesc===null || this.newEntry.itemDesc === " ") this.newEntry.itemDesc = "No Description Provided";
    // this.deSer.addData(this.newEntry);
    // .
    // .
    // .
    // .
    // .......................template driven form with two way data binding approach


    if(this.itemsCount === 0) this.deForm.controls.itemCount.setValue(this.itemsCount);
    this.deForm.controls.itemCount.setValue(this.itemsCount);
    this.deSer.addData(this.deForm.value);
  }

}
