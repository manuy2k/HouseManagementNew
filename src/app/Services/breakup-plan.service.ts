import { breakupPlanFormat } from './../HouseAdmin/breakupPlanFormat';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class BreakupPlanService {

  _bpData: breakupPlanFormat =
    {
      rent: 10000,
      elec: 1500,
      internet: 800,
      gas: 1000,
      groc: 2000,
      others:0
    };

  constructor() { }

  sendPlan(){
    return this._bpData;
    //return [...this._bpData];
  }

  updatePlan(newData:breakupPlanFormat){
    this._bpData = newData;
      //this._bpData.push(newData);
      console.log("From BreakupPlan Service",this._bpData);
  }

}
