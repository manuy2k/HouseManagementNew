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
      others:[]
    };


  constructor() { }

  sendPlan(){
    return this._bpData;
  }

  updatePlan(newData:breakupPlanFormat){
      this._bpData = newData;
      console.log(this._bpData);
  }

}
