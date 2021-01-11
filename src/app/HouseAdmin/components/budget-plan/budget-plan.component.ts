import { breakupPlanFormat } from './../../breakupPlanFormat';
import { BreakupPlanService } from './../../../Services/breakup-plan.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-budget-plan',
  templateUrl: './budget-plan.component.html',
  styleUrls: ['./budget-plan.component.css']
})
export class BudgetPlanComponent implements OnInit {

  newPlan: breakupPlanFormat;

  //....................................togglers
  _rent: boolean = false;
  _elec: boolean = false;
  _net:boolean = false;
  _gas:boolean = false;
  _groc:boolean = false;
  _oth:boolean = false;
  //....................................togglers

  constructor(private _bps: BreakupPlanService) { }


  ngOnInit() {
    this.newPlan =  this._bps.sendPlan();
    console.log(this.newPlan.elec);
  }

  updateNow(){
    this._bps.updatePlan(this.newPlan);
    alert("Updated Successfully");
  }

  _rentM(){
    this._rent = !this._rent;
  }

  _elecM(){
   this._elec = !this._elec;
  }

  _netM(){
    this._net = !this._net;
  }

  _gasM(){
    this._gas = !this._gas;
  }

  _grocM(){
    this._groc = !this._groc;
  }

  _othM(){
    this._oth = !this._oth;
  }
}
