import { dailyExpensesFormat } from './../HouseAdmin/dailyExpensesFormat';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyExpensesService {
  staticItemsList: dailyExpensesFormat[] = [
    {
      itemName:'Plates',
      itemCategory:'Grocery',
      itemCount: 5,
      itemDesc:'Eating Plates',
      itemCost:250
    },
    {
      itemName:'Broomstick',
      itemCategory:'Grocery',
      itemCount: 1,
      itemDesc:'Cleaning Stick',
      itemCost:100
    },
    {
      itemName:'Door Mats',
      itemCategory:'Grocery',
      itemCount: 4,
      itemDesc:'Door Mats',
      itemCost:320
    },
    {
      itemName:'Kitchen Bowls',
      itemCategory:'Grocery',
      itemCount: 15,
      itemDesc:'Boxes & Etc for Kitchen Serving Purpose',
      itemCost:500
    },
    {
      itemName:'Bed Matress',
      itemCategory:'Furniture',
      itemCount: 4,
      itemDesc:'Sleeping Bed Matress & Pillows',
      itemCost:4000
    },
    {
      itemName:'Bed Sheets',
      itemCategory:'Furniture',
      itemCount: 4,
      itemDesc:'Sheets for Matress',
      itemCost:400
    },
    {
      itemName:'Lays',
      itemCategory:'Edibles',
      itemCount: 10,
      itemDesc:'Lays Chips',
      itemCost:200
    },
    {
      itemName:'Sprite & Thumps Up',
      itemCategory:'Edibles',
      itemCount: 10,
      itemDesc:'Drinks & Chill',
      itemCost:600
    },
    {
      itemName:'Sweets & Hot',
      itemCategory:'Edibles',
      itemCount: 15,
      itemDesc:'Bakery Items',
      itemCost:1000
    },
    {
      itemName:'Vegetables',
      itemCategory:'Edibles',
      itemCount: 20,
      itemDesc:'Vegetables for a week',
      itemCost:300
    },
    {
      itemName:'Netflix',
      itemCategory:'Others',
      itemCount: 1,
      itemDesc:'Netflix account @ month, 6 members plan',
      itemCost:750
    },
    {
      itemName:'Prime Video',
      itemCategory:'Others',
      itemCount: 1,
      itemDesc:'Amazon Prime account for 1 year',
      itemCost:1000
    }
  ];

  private msg = new Subject<dailyExpensesFormat[]>();
  constructor() { }

  sendData(){
  return [...this.staticItemsList];
  }

  addData(newEntry:dailyExpensesFormat){
    this.staticItemsList.push(newEntry);
    this.msg.next([...this.staticItemsList]);
  }

  sendObvData(){
    return this.msg.asObservable();
  }
}
