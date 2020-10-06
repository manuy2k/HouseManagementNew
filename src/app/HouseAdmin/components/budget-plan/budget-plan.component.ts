import { breakupPlanFormat } from './../../breakupPlanFormat';
import { BreakupPlanService } from './../../../Services/breakup-plan.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-budget-plan',
  templateUrl: './budget-plan.component.html',
  styleUrls: ['./budget-plan.component.css']
})
export class BudgetPlanComponent implements OnInit {

  _trent:boolean = true;
  _telec:boolean = true;
  _tnet:boolean = true;
  _tgas:boolean = true;
  _tgroc:boolean = true;
  _tothers:boolean = true;
  newPlan: breakupPlanFormat;
  constructor(private _bps: BreakupPlanService) { }

  ngOnInit() {
    this.newPlan =  this._bps.sendPlan();
    console.log(this.newPlan);
  }

  toggler(v){
    if(v=="r"){
      this._trent = !this._trent;
    }
    if(v=="e"){
      this._telec = !this._telec;
    }
    if(v=="n"){
      this._tnet = !this._tnet;
    }
    if(v=="g"){
      this._tgas = !this._tgas;
    }
    if(v=="gr"){
      this._tgroc = !this._tgroc;
    }
    if(v=="o"){
      this._tothers = !this._tothers;
    }

  }

  goForIt(){
    this._bps.updatePlan(this.newPlan);
    alert("Updated Successfully");
  }
}
